// import { faker } from "@faker-js/faker";
// import { addDoc, collection, serverTimestamp } from "firebase/firestore";
// import { db } from "../src/firebase";

/*Seed User Data into db */
// const fakemail = faker.internet.email();
// const fakename = faker.person.fullName();
// const fakeimg = faker.image.urlLoremFlickr({
//   category: "Person",
//   height: 256,
//   width: 128,
// });
// const addUsers = async () => {
//   await addDoc(collection(db, "Users2"), {
//     email: fakemail,
//     name: fakename,
//     profilePicture: fakeimg,
//     createdAt: serverTimestamp()
//   });
// };

/*Seed uploaded Images by User 
'065eVuGYSEEZ1xpdmD2p',
'4SNAcjPjJgeohglOSjaA',
'7lmIRfycnilp01SIsWCN',
'9jL5qeV9WjBsZGfQMnOJ',
'GiSKFaWVz2OfE7tWFtZB',
'LjPND7R2Q794NN3Qr72c',
'NTnXnzUKnE0mZIhHHxke',
'OQCIbbJBSjvYlxeHX9E6',
'RJI1TZthvBOpToM5c4SB',
'SzHuT8QHkQCNKNUEMiBe',
'oZxkZewp2sMQMQq0kAfz',
'qGt9YfyaP6Lhfw8DsYiG',
'r0FJdbaFPs0eAQj4fqJj',
'uRIT5cFUo4RJMMT1GYVd',
'v8TmGMvqcz5iIsxhMfYl' ,   
*/

// const fakecaption = faker.lorem.paragraph(2);
// const fakeimg = faker.image.urlPicsumPhotos();
// const userId = "DHhPi3Iv3Ykw4KR5CgmI";
// const faketitle = faker.lorem.title()

// const uploadImg = async () => {
//   await addDoc(collection(db, "Images"), {
//     title: faketitle,
//     caption: fakecaption,
//     imageUrl: fakeimg,
//     userId: userId,
//     fileName: fakeimg,
//     createdAt: serverTimestamp(),
//   });
// };

/*
Seed Likes to uploaded Images
 */
// let users: string[] = [
// '065eVuGYSEEZ1xpdmD2p',
// '4SNAcjPjJgeohglOSjaA',
// '7lmIRfycnilp01SIsWCN',
// '9jL5qeV9WjBsZGfQMnOJ',
// 'GiSKFaWVz2OfE7tWFtZB',
// 'LjPND7R2Q794NN3Qr72c',
// 'NTnXnzUKnE0mZIhHHxke',
// 'OQCIbbJBSjvYlxeHX9E6',
// 'RJI1TZthvBOpToM5c4SB',
// 'SzHuT8QHkQCNKNUEMiBe',
// 'oZxkZewp2sMQMQq0kAfz',
// 'qGt9YfyaP6Lhfw8DsYiG',
// 'r0FJdbaFPs0eAQj4fqJj',
// 'uRIT5cFUo4RJMMT1GYVd',
// 'v8TmGMvqcz5iIsxhMfYl',
// ];
// let imageDocs: string[] = [
// '0yxadolCZEYg8st5m3kK',
// '1JdRHxz1KlulkmCLJ7w4',
// '2HX8TBohk1TJUijywd7D',
// '6fg3Ui2h0HnyG125mOcZ',
// 'Cda6oK12ZQyl1lCHyUqx',
// 'TPWcwzb75yM0uGsbS8te',
// 'TmmezJcpvPE5mNZAxRP0',
// 'U2mNuaQi1pep7UyEIBNW',
// 'XOkjhuW0eVHboT2LTmLR',
// 'aJZnBpQpcrtoDUoGONAN',
// 'igqx0nr4O0MpJENjcUrv',
// 'oCcIERnHgHUk4fMLombL',
// 'ucmhXLYepOMfbcjE9WpX',
// 'xIFzgyK06brx2Lx0DvgG',
// 'ysNS38PKz0e7MKv8Wuet',
// 'zCf7PaFicSAjM6xecDyk',
// ];

// const likeImg = async (imageArr: string[], userArr: string[]) => {
//   const addLike = async (image: string, user: string) => {
//     await addDoc(collection(db, "Likes"), {
//       imageId: image,
//       userId: user,
//     });
//   };
//   userArr.forEach((user) => {
//     imageArr.forEach((image) => {
//       addLike(image, user);
//     });
//   });
// };

/*
Seed comments to uploaded Images
 */
// let users: string[] = [
//   "DHhPi3Iv3Ykw4KR5CgmI",
//   "Uk20pVU5PnKwDXcQWpn6",
//   "VE6LBkQ7iHu2iZhJzilp",
//   "nuVGrGgNNEVHItBSv4s0",
//   "pnjhcihu9kwEafATSYkW",
//   "tpCxm4DkqNoDlnBpjCBh",
//   "uVHbvdJCblybLaodwms8",
// ];
// let imageDocs: string[] = [
//   "SVvLVJTdm3hAshvpWnQY",
//   "TbNIaSGkA36XflT7NYyP",
//   "UmMGZhULqLHJn7PbkIiC",
//   "X289V1deT0mMhDl8AoY9",
//   "b5YFTOHqckfrOZNTsVcI",
//   "bhm3QsI8P0fWq6h721ym",
//   "c90e5mEUsNfd3BjXB2Ku",
//   "eHFmYpVrOTwssGufwRKD",
//   "jZ7PXX51aeBTUkRbkV9z",
//   "ln17t7qsLFAVpq4qsQxm",
//   "pu9PDUshS0YiKFvxH2w7",
//   "rSKOaSt7GRhX0VDJqe32",
//   "u7KTj97QR0OOUB9T8rpv",
//   "z1gGfZbiBEOMIMdv3x8u",
// ];

// const fakecomment = faker.lorem.paragraph({ min: 2, max: 4 });
// const commentImg = async (imageArr: string[], userArr: string[]) => {
//   const addComment = async (image: string, user: string) => {
//     await addDoc(collection(db, "Comments"), {
//       comment: fakecomment,
//       imageId: image,
//       userId: user,
//       createdAt: serverTimestamp()
//     });
//   };
//   userArr.forEach((user) => {
//     imageArr.forEach((image) => {
//       addComment(image, user);
//     });
//   });
// };
