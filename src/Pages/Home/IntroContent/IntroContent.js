import React from "react";

const IntroContent = () => {
  return (
    <section>
      <div className="dark:bg-violet-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl  text-blue-500">
            Smile Happily
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            Your smile is precious. Keep smiling. Take care of your teets. Brush
            Regularly
          </p>
          <div className="flex flex-wrap justify-center"></div>
        </div>
      </div>
      <img
        src="https://media.istockphoto.com/id/1349328691/photo/young-happy-woman-during-dental-procedure-at-dentists-office.jpg?b=1&s=170667a&w=0&k=20&c=DWgLqfwCjbOPzfO00JUNgLRAP2-9H4pftFi8u8K4A0w="
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      />
    </section>
  );
};

export default IntroContent;
