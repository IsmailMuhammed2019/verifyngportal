// pages/registerStep2.js
import Header from '../components/Header';
import RegisterFormStep2 from '../components/RegisterFormStep2';
import Footer from '../components/Footer';

export default function RegisterStep2() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center mt-3">
        <div className="w-full max-w-4xl p-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Company Details</h1>
          <div className="w-full p-8 bg-white rounded-lg shadow-lg">
            <RegisterFormStep2 />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
