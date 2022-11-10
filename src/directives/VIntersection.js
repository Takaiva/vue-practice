export default {
    mounted(el, binding) {
        const options = {
          rootMargin: "0px",
          threshold: 1.0,
        };

        // функция обратного вызова
        const callback = (entries, observer) => {
          if (entries[0].isIntersecting) {
            binding.value();
          }
        };

        // наблюдатель
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
    },
    name: 'intersection',
}
