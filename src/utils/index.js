import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";



export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listing",
    label: "Всички продукти",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "Мъже",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Жени",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "Деца",
    path: "/product/listing/kids",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Обновяване на продукт",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Добавяне на продукти",
    path: "/admin-view/add-product",
  },
  {
    id: "orders",
    label: "Поръчки",
    path: "/admin-view/orders",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Въведете вашето име",
    label: "Име",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Въведете email адрес",
    label: "Email адрес",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Въведете парола",
    label: "Парола",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "admin",
        label: "Admin",
      },
      {
        id: "customer",
        label: "customer",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Въведете email адрес",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Въведете парола",
    label: "Парола",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Име",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Въведете цена",
    label: "Цена",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Въведете описание",
    label: "Описание",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Категория",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Мъже",
      },
      {
        id: "women",
        label: "Жени",
      },
      {
        id: "kids",
        label: "Деца",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Въведете адрес",
    label: "Адрес",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "Промоция",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Да",
      },
      {
        id: "no",
        label: "Не",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Въведете намалението в %",
    label: "Намаление",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];


export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Въведете вашите имена",
    label: "Три имена",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Въведете адрес",
    label: "Адрес",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Въведете град",
    label: "Град",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Въведете държава",
    label: "Държава",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Въведете пощенски код",
    label: "Пощенски код",
    componentType: "input",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyD5Alvae8H3a2To1DRjvweJVUuUwYTiF9I",
  authDomain: "modernik.firebaseapp.com",
  projectId: "modernik",
  storageBucket: "modernik.appspot.com",
  messagingSenderId: "626955762261",
  appId: "1:626955762261:web:02f40e7c046a9e779372dc",
  measurementId: "G-BZL21K1RQM"
};

export const firebaseStroageURL = "gs://modernik.appspot.com"