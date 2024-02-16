const menuConfig = (router) => {
  return {
    home: {
      id: "home",
      title: "Home",
      closeOnClick: false,
      callback: () => {
        router.push({
          name: "Home",
        })
      },
    },    
    logout: {
      id: "logout",
      title: "Logout",
      closeOnClick: false,
      callback: async () => {
        //... logout the user
        await $this.store.dispatch("auth/logout")
      },
    },
  }
}

/**
 * Pre-defined TailwindCSS class names
 */
const menuStyle = {
  item: {
    base: ["flex flex-col justify-center items-start"],
    idle: ["bg-slate-100"],
    active: [""],
    disable: ["bg-slate-100"],
    children: ["w-full self-end bg-slate-200 hover:bg-blue-500"],
  },
  text: {
    base: ["w-full mx-auto text-start py-2 pl-6 text-xl"],
    idle: ["cursor-pointer hover:bg-blue-500 hover:text-white hover:font-medium"],
    active: ["bg-blue-500 text-white font-medium"],
    disable: ["text-slate-400"],
    children: [""],
  },
}

export { menuConfig, menuStyle }
