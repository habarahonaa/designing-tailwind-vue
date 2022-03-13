<template>
  <div class="bg-gray-100 flex">
    <div
      class="
        px-8
        py-12
        max-w-md
        mx-auto
        sm:max-w-xl
        lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12
      "
    >
      <div class="xl:max-w-lg xl:ml-auto">
        <img src="./img/logo.svg" alt="Workcation Logo" class="h-10" />
        <img
          src="./img/beach-work.jpeg"
          alt="Person relaxing at the beach"
          class="
            mt-6
            rounded-lg
            shadow-xl
            sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center
            lg:hidden
          "
        />
        <h1
          class="
            mt-6
            text-2xl
            font-bold
            text-gray-800
            leading-tight
            sm:mt-8 sm:text-4xl
            lg:text-3xl
            xl:text-4xl
          "
        >
          You can work from anywhere.
          <br class="hidden lg:inline" /><span class="text-indigo-500"
            >Take advantage of it!</span
          >
        </h1>
        <p class="mt-2 text-gray-500 sm:mt-4 sm:text-xl">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div class="mt-4 sm:mt-6">
          <button
            href="#"
            class="btn btn-indigo shadow-lg uppercase sm:text-base"
          >
            Book your escape!
          </button>
          <button href="#" class="ml-2 btn btn-gray sm:text-base">
            Learn more
          </button>
        </div>
      </div>
    </div>
    <div class="hidden lg:block lg:w-1/2 lg:relative">
      <img
        src="./img/beach-work.jpeg"
        alt="Person relaxing at the beach"
        class="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  </div>
</template>
