import Head from 'next/head';
import React, { useState, useRef, useEffect } from 'react';
import { FaListUl, FaPlus, FaSpinner } from 'react-icons/fa';
import Router from 'next/router';
import _ from 'lodash';

import { slugifyString } from '../../utils/stringMethods';

import { BackgroundAdd } from '../../styles/Components/UI/DefaultSidebarPage/DefaultSidebarPage';
import BannerNameDescription from '../../components/UI/Add/BannerNameDescription/BannerNameDescription';
import SEO from '../../components/UI/Add/SEO/SEO';
import Organization from '../../components/UI/Add/Organization/Organization';
import PromotionsList from '../../components/UI/List/Add/PromotionsList/PromotionsList';
import {
  Wrapper,
  StickyDiv,
  MainGrid,
  SubmitButton,
  LoadingSpinner,
  Loading,
  Warning
} from '../../styles/Pages/Add/Product';

const AddCategory = () => {
  const childRef = useRef();

  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSlugValid, setIsSlugValid] = useState(true);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');

  const [promotionsOnBanner, setPromotionsOnBanner] = useState([]);
  const [promotionsList, setPromotionsList] = useState([]);

  const [featured, setFeatured] = useState(false);

  const [slug, setSlug] = useState('');

  const [seoTitle, setSeoTitle] = useState('');
  const [seoSlug, setSeoSlug] = useState('');
  const [seoDescription, setSeoDescription] = useState('');

  const [categories, setCategories] = useState('');
  const [categoriesArray, setCategoriesArray] = useState([]);
  const [tags, setTags] = useState('');
  const [tagsArray, setTagsArray] = useState([]);

  const onChangeSeoTitle = (e) => {
    setSeoTitle(e.target.value);
  };

  const onChangeSeoSlug = (e) => {
    setSeoSlug(slugifyString(e.target.value));
  };

  const onChangeSeoDescription = (e) => {
    setSeoDescription(e.target.value);
  };

  const changeSlugFromProductName = () => {
    setSlug(slugifyString(categoryName));
  };

  const disabledSubmitButton = () => {
    if (
      isSlugValid &&
      slug.length > 0 &&
      categoryName.length > 0 &&
      description.length > 0 &&
      seoTitle.length > 0 &&
      seoSlug.length > 0 &&
      seoDescription.length > 0 &&
      categories.length > 0 &&
      tags.length > 0 &&
      !_.isEmpty(promotionsOnBanner) &&
      !_.isEmpty(tagsArray) &&
      !_.isEmpty(categoriesArray)
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  useEffect(() => {
    disabledSubmitButton();
  }, [
    promotionsOnBanner,
    isSlugValid,
    slug,
    categoryName,
    description,
    seoTitle,
    seoSlug,
    seoDescription,
    categories,
    categoriesArray,
    tags,
    tagsArray
  ]);

  const setGlobalVariable = async () => {
    const bodyRequest = {
      type: 'banners',
      title: categoryName
    };
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/banners/set/global-variable`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
      }
    );
    return response;
  };

  const verifySlug = async () => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/banners/validation/slug/${slug}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = await response.json();
    return data;
  };

  const publishProduct = async (product) => {
    const response = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/banners/publish`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      }
    );
    const data = await response.json();
    return data;
  };

  // const fetchAllPromotions = async () => {
  //   const res = await fetch(
  //     `${process.env.MAIN_API_ENDPOINT}/admin/promotions/get/all`,
  //     {
  //       method: 'GET',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       credentials: 'same-origin',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   );
  //   const data = await res.json();
  //   setPromotionsList(data);
  // };

  // useEffect(() => {
  //   fetchAllPromotions();
  // }, []);

  const fetchAllPromotions = async () => {
    const res = await fetch(
      `${process.env.MAIN_API_ENDPOINT}/admin/promotions/get/all`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = await res.json();
    setPromotionsList(data);
  };

  useEffect(() => {
    fetchAllPromotions();
  }, []);

  useEffect(() => {
    setSeoSlug(slug);
  }, [slug]);

  useEffect(() => {
    changeSlugFromProductName(categoryName);
  }, [categoryName]);

  useEffect(() => {
    if (slug.length > 0) {
      const checkSlugValid = async () => {
        await verifySlug(slug);
      };
      checkSlugValid();
      setGlobalVariable();
    }
  }, [categoryName]);

  const onSubmit = async () => {
    disabledSubmitButton();
    if (allFieldsFilled) {
      const productInfo = {
        isSlugValid,
        categoryName,
        description,
        seo: {
          title: seoTitle,
          slug: seoSlug,
          description: seoDescription
        },
        organization: {
          categories: categoriesArray,
          tags: tagsArray
        }
      };
      const isSlugValidRes = await verifySlug(slug);
      if (isSlugValidRes.valid) {
        const res = await publishProduct(productInfo);
        Router.push(`/product/${res.slug}`);
      } else {
        console.log('Slug is invalid');
        setIsSlugValid(false);
      }
    } else {
      setWarning(true);
    }
  };

  const categoriesToArray = () => {
    const tempCategories = categories.split(',');
    tempCategories.map((category, i) => {
      tempCategories[i] = tempCategories[i].trim();
    });
    setCategoriesArray(tempCategories);
  };

  useEffect(() => {
    categoriesToArray();
  }, [categories]);

  const tagsToArray = () => {
    const tempTags = tags.split(',');
    tempTags.map((tag, i) => {
      tempTags[i] = tempTags[i].trim();
    });
    setTagsArray(tempTags);
  };

  useEffect(() => {
    tagsToArray();
  }, [tags]);

  const onChangeCategories = (e) => {
    setCategories(e.target.value);
  };

  const onChangeTags = (e) => {
    setTags(e.target.value.toLowerCase());
  };

  const onChangeProductName = (e) => {
    setCategoryName(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.getContent());
  };

  const removeElementFromArray = (arr, element) => {
    const index = arr.indexOf(element);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };

  const handleGetElement = (el) => {
    const element = el;
    if (!promotionsOnBanner.includes(element.id)) {
      setPromotionsOnBanner((bannerOnBundle) => bannerOnBundle.concat(element.id));
      element.style.backgroundColor = '#18840f';
      element.style.border = '1px solid #18840f';
      element.querySelector('.name').style.color = '#fff';
    } else {
      setPromotionsOnBanner(removeElementFromArray(promotionsOnBanner, element.id));
      element.style.backgroundColor = '#efefef';
      element.style.border = '1px solid #efefef';
      element.querySelector('.name').style.color = '#18840f';
    }
  };

  const handleCheckFeatured = () => {
    setFeatured(!featured);
  };

  return (
    <>
      <Head>
        <title>Add Category | Reseller - Canada Cannabyss</title>
      </Head>
      <BackgroundAdd>
        <Wrapper>
          <MainGrid className='main'>
            <BannerNameDescription
              MainIcon={<FaListUl className='mainIcon' />}
              PlusIcon={<FaPlus className='plus' />}
              title='Add Category'
              itemName='Category Name'
              onChangeItemName={onChangeProductName}
              description={description}
              onChangeDescription={onChangeDescription}
              handleCheckFeatured={handleCheckFeatured}
              featured={featured}
            />
            <SEO
              onChangeSeoTitle={onChangeSeoTitle}
              onChangeSeoSlug={onChangeSeoSlug}
              onChangeSeoDescription={onChangeSeoDescription}
              title={seoTitle}
              slug={seoSlug}
              description={seoDescription}
            />
          </MainGrid>
          <StickyDiv />
        </Wrapper>
        {warning && <Warning>Fill all fields before submit</Warning>}
        <SubmitButton type='button' onClick={onSubmit}>
          Add Category
        </SubmitButton>
      </BackgroundAdd>
      {loading && (
        <Loading>
          <LoadingSpinner>
            <FaSpinner />
          </LoadingSpinner>
        </Loading>
      )}
    </>
  );
};

export default AddCategory;
