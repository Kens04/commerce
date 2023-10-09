'use client';

import { useForm } from 'react-hook-form';
import { validationSchema } from 'utils/validation-schema';
import { valibotResolver } from '@hookform/resolvers/valibot';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ mode: 'onChange', resolver: valibotResolver(validationSchema) });

  const submitMail = async (data: FormData) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicId = process.env.REACT_APP_EMAILJS_PUBLIC_ID;

    const recordData: Record<string, unknown> = {
      name: data.name,
      email: data.email,
      message: data.message
    };

    try {
      const response = await emailjs.send(serviceId!, templateId!, recordData, publicId!);
      console.log(response);
    } catch (error) {
      console.error('エラーが出ました' + error);
    }
  };

  return (
    <div className="mx-auto max-w-[1200px] px-5 pb-14 pt-10">
      <div className="text-center">
        <h2 className="text-title whitespace-nowrap text-4xl md:px-24">お問い合わせ</h2>
      </div>
      <div className="mx-auto mt-8 flex w-full flex-col justify-around md:mt-16 md:w-3/5">
        <form onSubmit={handleSubmit(submitMail)}>
          <div>
            <label className="text-title w-full md:text-xl" htmlFor="name">
              お名前
            </label>
            <input
              className="input-border mt-1 h-11 w-full rounded pl-3 focus:border-none"
              type="text"
              id="name"
              {...register('name')}
            />
            <p className="text-error pt-1">{errors.name?.message as React.ReactNode}</p>
          </div>
          <div className="mt-6">
            <label className="text-title w-full md:text-xl" htmlFor="email">
              メールアドレス
            </label>
            <input
              type="email"
              className="input-border mt-1 h-11 w-full rounded pl-3 focus:border-none"
              id="email"
              {...register('email')}
            />
            <p className="text-error pt-1">{errors.email?.message as React.ReactNode}</p>
          </div>
          <div className="mt-6">
            <label className="text-title w-full md:text-xl" htmlFor="message">
              お問い合わせ内容
            </label>
            <textarea
              className="input-border mt-1 h-48 w-full rounded p-3"
              id="message"
              {...register('message')}
            />
            <p className="text-error pt-1">{errors.message?.message as React.ReactNode}</p>
          </div>
          <button
            type="submit"
            className="button-bg mt-6 w-full rounded-md py-3 text-white md:text-xl"
          >
            送信する
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
