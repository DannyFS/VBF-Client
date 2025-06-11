import React from 'react';
import william1 from '../assets/William1.jpeg';
import william2 from '../assets/William2.jpeg';

export default function FoundersPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center text-[#004aad]">Founder: William Furgione</h1>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <img src={william1} alt="William Furgione 1" className="rounded shadow-md w-full md:w-1/2" />
        <img src={william2} alt="William Furgione 2" className="rounded shadow-md w-full md:w-1/2" />
      </div>

      <div className="text-lg leading-relaxed space-y-4">
        <p>William Furgione has developed a cadre of skills in his lifetime, part biologist, part mathematician, part finance advisor. A problem solver, a credit analyst, a herpetologist, and PADI certified Rescue Diver with a love for motorcycles, cars, and yachts but he is proudest about being a husband, father, grandfather.</p>
        <p>William joined the Marine Corps at 17 with a reluctant mother signing the contract, convinced that it was a peaceful time since the Vietnam War. A year later, he found himself in Iraq. After sustaining an injury during his fourth tour, William medically retired from the Marine Corps.</p>
        <p>With a young family and no professional skills, William turned to his passion for martial arts. As a third-degree black belt, he resumed training and eventually earned his fifth-degree black belt in Tang Soo Do and Tae Kwon Do. He opened karate schools in Baltimore, growing them to nearly 400 students.</p>
        <p>In October 1996, William met a mortgage broker who inspired him to enter the industry. By January 1997, William sold his karate schools and became a full-time mortgage broker. William started his journey at Bankers First Mortgage, where he learned how to develop clients and leads by working with various contractors, such as pool companies, roofing companies, and window companies who needed financing for homeowners’ projects. He eventually opened his own company, West Star Mortgage, which he ran for nearly a decade before selling West Star Mortgage and moving to the Carolinas in 2010.</p>
        <p>In the Carolinas, William founded the Veterans Benefits Foundation, a 501(c)(3) nonprofit out of his home. Seeing a need to support and educate veterans, the Foundation exploded almost overnight. What started as an idea, a cell phone and a list of 25 Veterans in need, within six months, the Foundation has moved thru three commercial locations until finding enough space in down town Myrtle Beach to employ 48 full-time employees and a board of directors. Through the foundation, he developed relationships with distinguished executive officers such as Brigadier General Charles Baldwin (USAF), Major General William “Wild Bill” Kirkland (USA), Lieutenant General Doug Sharrow (USA), Major General McCoy (USAF) and Rear Admiral Tom Donaldson (USN), along with many senior staff NCOs, including Command Sergeant Majors, Command Master Chiefs, and Command Chief Master Sergeants. The Veterans Benefits Foundation focused on educating veterans about all the benefits offered by Veterans Affairs, with a special spotlight on the VA Guaranteed Home Loan benefit. William staffed the VBF with veteran service officers and even became a veteran service officer under the direction of the VFW and the American Legion. William’s proudest project for the Foundation was the “Battles to Bubbles” program, which took veterans scuba diving as a form of therapy. This amazing program was even featured in a short story by National Geographic, and was also featured on WMBF news.</p>
        <p>After operating the VBF for 5 years, William decided on stepping down from daily operations at the Veterans Benefits Foundation, William returned to the mortgage industry, working as a federally chartered mortgage originator for the Bank of England for about eight years. Later, he joined PRMG (Paramount Residential Mortgage Group) for a short time before being selected to join Clearview Mortgage as the Myrtle Beach branch manager. Since joining Clearview Mortgage, William was recognized by United Wholesale Mortgage, the largest wholesale mortgage company in the United States, as one of the fastest-growing loan officers in 2024. After 29 successful years in the mortgage industry, His motto, “Where there’s a William, there’s a way,” reflects his dedication and ability to handle everything from straightforward government loans to complex DSCR condotel loans and even assist clients with their investment portfolios through a network of full-service home related professionals.</p>
      </div>
    </div>
  );
}
