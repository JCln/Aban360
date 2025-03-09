import React, { useEffect, useState } from 'react'
import DefaultLayout from "../../../components/Layouts/DefaultLayout";
import Loading from '../../../components/Common/Loading';
// import { icons } from '../../../components/Icons/Icons';
import { useNavigate } from 'react-router-dom';
import CardWithTabs from '../../../components/Common/CardWithTabs';
// import SearchForm from '../../../components/Search';
// import { DataGridComponent } from '../../../components/Common/DataGridComponent';
// import { GridColDef } from '@mui/x-data-grid';
import Breadcrumb from '../../../components/Common/BreadCrumb';
// import Management from '../../../components/ServicePermissions/management';
import GenericForm from '../../../components/Form/GenericForm';
import Type, { useCaptchaMode } from '../../../components/Captcha/Type';
import Lang, { useCaptchaLang } from '../../../components/Captcha/Lang';
import { captchaRead, captchaReadPost, captchaUpdate, createCaptcha, fetchCaptchaDictionary } from '../../../api/Captcha';
import { toast } from 'react-toastify';
import { path } from '../../../config/path';
import { useQuery } from 'react-query';
export const useCaptchaDictionary = () => useQuery("captchaDictionary", fetchCaptchaDictionary);

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [defaultData, setDefaultData] = useState<any>({})
  // const navigate = useNavigate();
  const { data: modes, error, isLoading } = useCaptchaMode()
  const { data: dictionaries, error: errordictionary, isLoading: isLoadingdictionary } = useCaptchaDictionary()
  const { data: langs, error: errorlang, isLoading: isLoadingLang } = useCaptchaLang()
  const _modes = Array.isArray(modes?.data)
    ? modes?.data?.map(item => ({
      id: item?.id,
      value: item?.id,
      label: item?.title,
      selected: defaultData?.captchaDisplayModeId
    }))
    : [];
  const _langs = Array.isArray(langs?.data)
    ? langs?.data?.map(item => ({
      id: item?.id,
      value: item?.id,
      label: item?.title
    }))
    : [];
  const _dictionaries = Array.isArray(dictionaries?.data)
    ? dictionaries?.data?.map(item => ({
      id: item?.id,
      value: item?.id,
      label: item?.title
    }))
    : [];
  const [captcha, setCaptcha] = useState(_dictionaries?.[0])

  useEffect(() => {
    setLoading(true)
    captchaRead(captcha?.id).then(res => {
      if (res?.data) {
        setDefaultData(res?.data)
        setLoading(false)
      }
    }).catch(error => {
      setLoading(false)
      console.log(error)
    })

  }, [captcha])
  useEffect(() => {
  }, [defaultData])

  const formConfig1 = [
    { name: 'id', type: 'input', inputType: "hidden", class: "hidden", value: defaultData?.id },
    { name: 'dictionary', class: "col-span-3", label: 'عنوان تصویر امنیتی', type: 'select', options: _dictionaries ?? [], defaultValue: captcha?.id },
    { name: 'title', class: "col-span-3", label: 'عنوان ', type: 'input', value: captcha?.label ?? "" },
    { name: 'displayModeEnumId', class: "col-span-3", label: 'حالت تصویر امنیتی', type: 'select', options: _modes ?? [], defaultValue: _modes?.find(v => v.id === defaultData?.displayModeEnumId) },
    { name: 'languageId', class: "col-span-3", label: 'زبان', type: 'select', options: _langs ?? [], defaultValue: _langs?.find(v => v.id === defaultData?.languageId) },
    { name: 'fontName', class: "col-span-3", label: 'نوع فونت', type: 'input', value: defaultData?.fontName ?? "" },
    { name: 'fontSize', class: "col-span-3", label: ' فونت سایز', type: 'input', value: defaultData?.fontSize ?? "" },
    { name: 'rateLimit', class: "col-span-3", label: 'تعداد رفرش مجاز ', type: 'input', value: defaultData?.rateLimit ?? "" },
    { name: 'backColor', class: "col-span-3", label: 'رنگ بک‌گراند', type: 'input', value: defaultData?.backColor ?? "" },
    // { name: 'error', class: "col-span-3", label: 'متن خطا', type: 'input', inputType: 'text' },
    { name: 'foreColor', class: "col-span-3", label: 'رنگ نوشته ها', type: 'input', value: defaultData?.foreColor ?? "" },
    { name: 'noise', class: "col-span-3", label: 'noise', type: 'input', value: defaultData?.noise ?? "" },
    { name: 'expiresAfter', class: "col-span-3", label: 'منقضی شدن(دقیقه)', type: 'input', value: defaultData?.expiresAfter },
    { name: 'nonceKey', class: "col-span-3", label: 'نانس', type: 'input', value: defaultData?.nonceKey },
    { name: 'min', class: "col-span-3", label: 'کف', type: 'input', value: defaultData?.min },
    { name: 'max', class: "col-span-3", label: 'سقف', type: 'input', value: defaultData?.max },
    { name: 'direction', class: "col-span-3", label: 'جهت نمایش', type: 'input', value: defaultData?.direction },
    { name: 'encryptionKey', class: "col-span-3", label: 'کلید رمزنگاری', type: 'input', value: defaultData?.encryptionKey },
    { name: 'validationMessage', class: "col-span-3", label: 'پیام اعتبار سنجی', type: 'input', value: defaultData?.validationMessage ?? "" },
    { name: 'validationMessageClass', class: "col-span-3", label: 'کلاس پیام اعتبار سنجی', type: 'input', value: defaultData?.validationMessageClass ?? "" },
    { name: 'showThousandSeperator', class: "col-span-3", label: 'جدا کننده سه رقمی', type: 'checkbox', options: [{ value: defaultData?.showThousandSeperator, label: 'جدا کننده سه رقمی', isSelected: defaultData?.showThousandSeperator }] },
  ]

  const formConfig2 = [
    { name: 'post_title', class: "col-span-3", label: 'عنوان', type: 'input' },
    { name: 'post_captchaDisplayModeId', class: "col-span-3", label: 'حالت تصویر امنیتی', type: 'select', options: _modes ?? [] },
    { name: 'post_captchaLanguageId', class: "col-span-3", label: 'زبان', type: 'select', options: _langs ?? [] },
    { name: 'post_fontName', class: "col-span-3", label: 'نوع فونت', type: 'input' },
    { name: 'post_fontSize', class: "col-span-3", label: ' فونت سایز', type: 'input' },
    { name: 'post_rateLimit', class: "col-span-3", label: 'تعداد رفرش مجاز ', type: 'input' },
    { name: 'post_backColor', class: "col-span-3", label: 'رنگ بک‌گراند', type: 'input' },
    { name: 'post_foreColor', class: "col-span-3", label: 'رنگ نوشته ها', type: 'input' },
    { name: 'post_noise', class: "col-span-3", label: 'noise', type: 'input' },
    { name: 'post_expiresAfter', class: "col-span-3", label: 'منقضی شدن(دقیقه)', type: 'input' },
    { name: 'post_nonceKey', class: "col-span-3", label: 'نانس', type: 'input' },
    { name: 'post_min', class: "col-span-3", label: 'کف', type: 'input' },
    { name: 'post_max', class: "col-span-3", label: 'سقف', type: 'input' },
    { name: 'post_direction', class: "col-span-3", label: 'جهت نمایش', type: 'input' },
    { name: 'post_encryptionKey', class: "col-span-3", label: 'کلید رمزنگاری', type: 'input' },
    { name: 'post_validationMessage', class: "col-span-3", label: 'پیام اعتبار سنجی', type: 'input' },
    { name: 'post_validationMessageClass', class: "col-span-3", label: 'کلاس پیام اعتبار سنجی', type: 'input' },
    { name: 'post_showThousandSeperator', class: "col-span-3 my-auto", label: 'جدا کننده سه رقمی', type: 'checkbox', options: [{ value: defaultData?.showThousandSeperator, label: 'جدا کننده سه رقمی' }] },
    { name: 'post_isSelected', class: "col-span-3 my-auto", label: 'فعال', type: 'checkbox', options: [{ value: defaultData?.showThousandSeperator, label: 'فعال' }] },
  ]
  const onSubmitUpdate = (data) => {
    const newData = {};
    for (const key in data) {
      if (!key || data[key] === null || data[key] === '') {
        continue;
      }
      if (data.hasOwnProperty(key)) {
        if (typeof data[key] === 'object' && data[key] !== null && 'id' in data[key]) {
          newData[key] = data[key].id;
        } else if (key === 'id') {
          newData[key] = Number(data[key]);
        } else {
          newData[key] = data[key];
        }
      }

      if (key === 'id' || key === 'rateLimit' || key === 'min' || key === '' || key === 'max')
        newData[key] = Number(data[key])
      if (key === 'languageId')
        newData['captchaLanguageId'] = data[key]?.id
      if (key === 'displayModeEnumId')
        newData['captchaDisplayModeId'] = data[key]?.id
    }
    captchaUpdate(newData).then(res => {
      if (res.data) {
        toast(res.successMessage ?? "با موفقیت انجام شد", { type: 'success' })
        setInterval(function () {
          window.location.reload()
        }, 1000)
      }
    }).catch(error => {
      console.log(error)
    })
  }
  const onSubmitRead = (data) => {
    const newData = {};
    for (const key in data) {
      if (data.hasOwnProperty(key) && key.startsWith('post_')) {
        const newKey = key.replace(/^post_/, '');
        if (typeof data[key] === 'object' && data[key] !== null) {
          if ('id' in data[key]) {
            newData[newKey] = data[key].id;
          }
        }
        else if (data[key] !== null && data[key] !== undefined) {
          newData[newKey] = data[key];
        }
      }
    }

    createCaptcha(newData).then(res => {
      if (res.data) {
        toast(res.successMessage ?? "با موفقیت انجام شد", { type: 'success' })
        setInterval(function () {
          window.location.reload()
        }, 1000)
      }
    }).catch(error => {
      console.log(error)
    })
  }

  const tabs = [
    {
      label: "مدیریت",
      content: <>

        <GenericForm formConfig={formConfig1} onSubmit={onSubmitUpdate}
          handleChange={(val) => setCaptcha(val)} conditionName={'dictionary'}
        />
      </>
    },
    {
      label: "افزودن",
      content: <GenericForm formConfig={formConfig2} onSubmit={onSubmitRead} />
    },
    {
      label: "حالت ها",
      content: <Type />
    },
    {
      label: "زبان ها",
      content: <Lang />
    },
  ];
  if (isLoading) return <div>...loading modes</div>;

  return (
    <DefaultLayout>
      <div className="management-page container mx-auto">
        {loading ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 loading">
            <Loading type={"spin"} color="#3856ac" />
          </div>
        ) : (
          ""
        )}
        <Breadcrumb items={[{ href: path.management, label: "مدیریت" }, { label: "تصویر امنیتی" }]} />
        <CardWithTabs tabs={tabs} arrow={false} maxHeight='550px' />

      </div>
    </DefaultLayout>
  );
};


export default Page