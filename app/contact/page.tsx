'use client';

import { valibotResolver } from '@hookform/resolvers/valibot';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { validationSchema } from 'utils/validation-schema';

interface FormData {
  name: string;
  email: string;
  message: string;
  googleReCaptchaToken: string;
}

const Contact = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ mode: 'onChange', resolver: valibotResolver(validationSchema) });

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch('https://farmlys.form.newt.so/v1/RoRLD9idA', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        router.push('contact/thanks');
      } else {
        router.push('contact/error');
      }
    } catch (err) {
      router.push('contact/error');
    }
  });

  return (
    <div className="mx-auto max-w-screen-xl px-4 pb-12 md:pb-20">
      <div className="border-b border-gray-200 py-5 text-center">
        <h2 className="text-title text-2xl font-bold md:text-4xl">お問い合わせ</h2>
      </div>
      <div className="mx-auto mt-8 flex w-full flex-col justify-around md:mt-16 md:w-3/5">
        <form onSubmit={onSubmit}>
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
