// pages/register.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>VerifyNG - Register</title>
        <meta name="description" content="Register your company with VerifyNGPortal and get verified." />
      </Head>
      <Header />
      <main className="flex-grow flex items-center justify-center mt-3">
        <div className="w-full max-w-4xl p-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Company Registration Details</h1>
          <div className="w-full p-8 bg-white rounded-lg shadow-lg">
            <RegisterForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
