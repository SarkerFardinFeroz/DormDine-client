import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="shadow-2xl border-t  border-[#8e8d8d3f] ">
      <footer className="footer  p-10 max-w-[1604px] px-4 mx-auto ">
        <aside>
          <h1 className="font-bold font-Caveat pb-2  text-2xl md:text-4xl">
            <Link to={"/"}>
              <div className="flex-1   text-xl md:text-4xl font-bold flex items-center  gap-2">
                <img className="w-7 md:w-11" src={"/logo.png"} />
                <p>
                  Dorm<span className="text-[#e20031]">Dine</span>
                </p>
              </div>
            </Link>
          </h1>
          <p>
            <strong>Meal Services Location:</strong> <br />
            076 Student Union, Oklahoma State University
            <br />
            123 Skyline Plaza Avenue, DormDine, Metro Tower
            <br />
            <br />
            <strong>Contact Information:</strong>
            <br />
            <span className="text-primary-bg">
              Phone: +1 (676) 323-7567 <br />
              Available: 11:00 AM - 09:00 PM (Saturday - Thursday)
            </span>
          </p>
        </aside>
        <nav>
          <header className="font-bold text-lg">Meal Plans</header>
          <a href="/meal-plans" className="link link-hover">
            View Plans
          </a>
          <a href="/subscription" className="link link-hover">
            Subscription
          </a>
          <a href="/special-events" className="link link-hover">
            Special Events
          </a>
          <a href="/feedback" className="link link-hover">
            Feedback
          </a>
        </nav>
      
        <nav>
    <header className="font-bold text-lg">Support</header>
    <a href="/contact" className="link link-hover">Contact Us</a>
    <a href="/faq" className="link link-hover">FAQs</a>
    <a href="/student-resources" className="link link-hover">Student Resources</a>
    <a href="/report-issue" className="link link-hover">Report an Issue</a>
</nav>
        <nav>
          <header className="font-bold text-lg">Legal</header>
          <a href="/terms-of-use" className="link link-hover">
            Terms of Use
          </a>
          <a href="/privacy-policy" className="link link-hover">
            Privacy Policy
          </a>
          <a href="/cookie-policy" className="link link-hover">
            Cookie Policy
          </a>
        </nav>
      </footer>
      <div className="max-w-[1304px] px-4 mx-auto">
        <div className=" mx-auto h-[1px] bg-[#868686]"></div>
        <div className="text-center py-5">
          <div className="footer  py-4">
            <aside className="items-center grid-flow-col">
              <p className="text-sm ">
                2023 © DormDine by Sarker Fardin Feroz | All rights reserved
              </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
