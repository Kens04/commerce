import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.GOOGLE_RECAPTCHA_SITE_KEY ?? ''}
      language="ja"
    >
      <Suspense>
        <div className="w-full">
          <div className="mx-8 max-w-6xl py-20 sm:mx-auto sm:px-4">
            <Suspense>{children}</Suspense>
          </div>
        </div>
        <Footer />
      </Suspense>
    </GoogleReCaptchaProvider>
  );
}
