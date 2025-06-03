document.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.querySelector(".heroImage");
  const imgButton = document.querySelector(".imageChange");

  if (!heroImg) return;

  const galleries = [
    {
      path: "/assets/img/caribe/photos/continental/",
      images: [
        'C_1.jpeg', 'C_10.jpeg', 'C_11.jpeg', 'C_12.jpeg', 'C_13.jpeg', 'C_18.jpeg',
        'C_19.jpeg', 'C_2.jpeg', 'C_20.jpeg', 'C_21.jpeg', 'C_22.jpeg', 'C_23.jpeg',
        'C_24.jpeg', 'C_25.jpeg', 'C_26.jpeg', 'C_27.jpeg', 'C_28.jpeg', 'C_29.jpeg',
        'C_3.jpeg', 'C_30.jpeg', 'C_31.jpeg', 'C_32.jpeg', 'C_33.jpeg', 'C_34.jpeg',
        'C_35.jpeg', 'C_36.jpeg', 'C_37.jpeg', 'C_38.jpeg', 'C_39.jpeg', 'C_4.jpeg',
        'C_40.jpeg', 'C_42.jpeg', 'C_43.jpeg', 'C_44.jpeg', 'C_45.jpeg',
        'C_46.jpeg', 'C_47.jpeg', 'C_48.jpeg', 'C_49.jpeg', 'C_5.jpeg', 'C_51.jpeg',
        'C_52.jpeg', 'C_53.jpeg', 'C_54.jpeg', 'C_55.jpeg', 'C_56.jpeg', 'C_57.jpeg',
        'C_59.jpeg', 'C_6.jpeg', 'C_60.jpeg', 'C_61.jpeg', 'C_62.jpeg',
        'C_63.jpeg', 'C_64.jpeg', 'C_65.jpeg', 'C_66.jpeg', 'C_67.jpeg', 'C_68.jpeg',
        'C_69.jpeg', 'C_7.jpeg', 'C_8.jpeg', 'C_9.jpeg'
      ]
    },
    {
      path: "/assets/img/caribe/photos/insular/",
      images: [
        'I_1.jpg', 'I_10.jpg', 'I_11.jpg', 'I_12.jpg', 'I_13.jpg', 'I_14.jpg',
        'I_15.jpg', 'I_16.jpg', 'I_2.jpg', 'I_22.jpeg', 'I_23.jpeg', 'I_24.jpeg',
        'I_25.jpeg', 'I_3.jpg', 'I_33.jpeg', 'I_34.jpeg', 'I_34A.jpeg', 'I_4.jpg',
        'I_5.jpg', 'I_6.jpg', 'I_7.jpg', 'I_8.jpg', 'I_9.jpg'
      ]
    },
    {
      path: "/assets/img/pacifico/photos/continental/",
      images: [
        'P_10.jpeg', 'P_11.jpeg', 'P_12.jpeg', 'P_13.jpeg', 'P_14.jpeg', 'P_15.jpeg',
        'P_16.jpeg', 'P_17.jpeg', 'P_18.jpeg', 'P_19.jpeg', 'P_2.jpeg', 'P_20.jpeg',
        'P_21.jpeg', 'P_22.jpeg', 'P_23.jpeg', 'P_24.jpeg', 'P_25.jpeg', 'P_26.jpeg',
        'P_27.jpeg', 'P_28.jpeg', 'P_29.jpeg', 'P_3.jpeg', 'P_30.jpeg', 'P_31.jpeg',
        'P_32.jpeg', 'P_33.jpeg', 'P_34.jpeg', 'P_35.jpeg', 'P_36.jpeg', 'P_37.jpeg',
        'P_38.jpeg', 'P_39.jpeg', 'P_4.jpeg', 'P_40.jpeg', 'P_41.jpeg', 'P_5.jpeg',
        'P_6.jpeg', 'P_7.jpeg', 'P_8.jpeg', 'P_9.jpeg'
      ]
    },
    {
      path: "/assets/img/pacifico/photos/insular/",
      images: [
        'I_17.jpeg', 'I_18.jpeg', 'I_19.jpeg', 'I_20.jpeg', 'I_21.jpeg', 'I_26.jpeg',
        'I_27.jpeg', 'I_28.jpeg', 'I_29.jpeg', 'I_30.jpeg', 'I_31.jpeg', 'I_32.jpeg',
        'I_35.jpeg', 'I_36.jpeg', 'I_37.jpeg', 'I_38.jpeg', 'I_39.jpeg', 'I_40.jpeg',
        'I_41.jpeg', 'I_42.jpeg', 'I_44.jpeg', 'I_45.jpeg', 'I_46.jpeg', 'I_47.jpeg',
        'I_48.jpeg', 'I_49.jpeg', 'I_50.jpeg', 'I_51.jpeg', 'I_52.jpeg', 'I_53.jpeg'
      ]
    }
  ];

  // Aplica el gradiente de recibimiento
  const gradientDark = "linear-gradient(rgba(51, 51, 51, 0.3), rgba(86, 86, 86, 1))";

  let currentGalleryIndex = -1;
  let currentImageIndex = -1;

  function getRandomImage() {
    let galleryIndex;
    do {
      galleryIndex = Math.floor(Math.random() * galleries.length);
    } while (galleryIndex === currentGalleryIndex);

    const gallery = galleries[galleryIndex];
    let imageIndex;
    do {
      imageIndex = Math.floor(Math.random() * gallery.images.length);
    } while (galleryIndex === currentGalleryIndex && imageIndex === currentImageIndex);

    currentGalleryIndex = galleryIndex;
    currentImageIndex = imageIndex;

    return `${gallery.path}${gallery.images[imageIndex]}`;
  }

  function applyImageWithFade(imgUrl) {
    const bgImage = getComputedStyle(heroImg).backgroundImage;
    const separator = ', url(';
    const sepIndex = bgImage.lastIndexOf(separator);
    const gradient = sepIndex === -1 ? gradientDark : bgImage.slice(0, sepIndex).trim();

    heroImg.style.opacity = '0';

    setTimeout(() => {
      heroImg.style.backgroundImage = `${gradient}, url("${imgUrl}")`;
      heroImg.style.opacity = '1';
    }, 600); // tiempo del fade
  }

  // ▶ Imagen inicial al cargar la página
  const initialImage = getRandomImage();
  heroImg.style.backgroundImage = `${gradientDark}, url("${initialImage}")`;

  // ▶ Cambio de imagen al hacer clic
  if (imgButton) {
    imgButton.addEventListener("click", () => {
      const newImage = getRandomImage();
      applyImageWithFade(newImage);
    });
  }
});
