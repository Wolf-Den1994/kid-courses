import axios from 'axios';
import { ResponseStatus } from '../../helpers';
import type { Course } from './model';

export const getAllCourses = async (): Promise<Course[]|null> => {
  try {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    // const { data, status } = await axios.get(`${baseUrl}/docs/courses.json`);

    // if (status !== ResponseStatus.OK) {
    //   throw new Error('Something went wrong');
    // }

    // return data;
    return [
      {"name":"Шахматы","id":"course:1","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/MkHAmnYuhotzMc91WydqA7dkFrVPO3KoclrIJX2O.png","bgColor":"#FF9966","tags":["Головоломки","Шахматы","Логика и мышление"]},
      {"name":"Шахматы. Опытный","id":"course:2","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/gFWbs56OkIZQ0Ri6nMDWhipRk8u0XNadUpWuIgkN.png","bgColor":"#F3C692","tags":["Головоломки","Шахматы","Логика и мышление"]},
      {"name":"Шахматы. Мастер","id":"course:5","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/1BqsRduKjwy8CtlmUz4NzrNmNCrjlu0Un2j7IlPV.png","bgColor":"#F1C161","tags":["Головоломки","Шахматы","Логика и мышление"]},
      {"name":"Собаки","id":"course:18","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/SipSNNV06bIX5xx0IN8TG3vRi7dy9wImuYWe2e8Q.png","bgColor":"#A0D982","tags":["Окружающий мир"]},
      {"name":"Кошки","id":"course:55","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/o5XSklEPGMq0EzxYcaZCH4cM365Dwm9jEM2redR9.png","bgColor":"#F2B591","tags":["Окружающий мир"]},
      {"name":"Загадки-обманки","id":"course:474","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/47Ytuui6AiAMrsHX1saHcFwK3QXKxtNRs4kgXUP5.png","bgColor":"#E055A6","tags":["Загадки","Логика и мышление"]},
      {"name":"Угадай предмет","id":"course:475","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/e6Prc6SlewvdmDhdvQgZiZkddqdLAhr1UPfVm366.png","bgColor":"#977BEC","tags":["Загадки","Логика и мышление"]},
      {"name":"Германия","id":"course:14","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/X6zQv2mDLhdlQJSAbQ1GNRHe8Gzv9M7C9bHMKUpc.png","bgColor":"#73DCE5","tags":["Страны и столицы"]},
      {"name":"Италия","id":"course:17","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/NEg3faPGsj9RA4LILErgHbfP6m8aK0UDTRNGCSRV.png","bgColor":"#FFCC74","tags":["Страны и столицы"]},
      {"name":"Франция","id":"course:51","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/wODnGrKgx8HWYCs9NiM9rVgXAWf4DKsk1k6qcBPL.png","bgColor":"#FF9AB4","tags":["Страны и столицы"]},
      {"name":"Испания","id":"course:58","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/UjrWPruARdjpdAdX3PRuGOuItQmC499LGcvv3hfm.png","bgColor":"#FAD76E","tags":["Страны и столицы"]},
      {"name":"Япония","id":"course:64","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/NPQtHVIDQYXHUn8fuPspaVrVDMJ2Xk7dobQxSmog.png","bgColor":"#74D474","tags":["Страны и столицы"]},
      {"name":"Индия","id":"course:67","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/i0LHUAlpqwux9tgYJRIlHidyNMyzrB1syfSdvlvJ.png","bgColor":"#A3D957","tags":["Страны и столицы"]},
      {"name":"Китай","id":"course:86","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/yGzG3UKezoAHeCrynT1agK3IZJctq4L2sRExHM9u.png","bgColor":"#5ECA82","tags":["Страны и столицы"]},
      {"name":"США","id":"course:59","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/Ok8wXad4FdbwJxV2v0NZQyPrvWyPh2fkE4DTFHZ2.png","bgColor":"#AACEF2","tags":["Страны и столицы"]},
      {"name":"Мексика","id":"course:61","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/BOVVejQeqL1AqPTUMUzt7ByiBMMUQp9UHuNGWiWN.png","bgColor":"#FFD871","tags":["Страны и столицы"]},
      {"name":"Канада","id":"course:66","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/dqZ7nHmfbBkSThg22HXSP64MBuO359OPjvJfu2U2.png","bgColor":"#52CC8F","tags":["Страны и столицы"]},
      {"name":"Австралия","id":"course:53","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/WN4HxYcUeynv7K2mO38vX2GnzEwqJBTIZXypLFNh.png","bgColor":"#F2D4AA","tags":["Страны и столицы"]},
      {"name":"Новая Зеландия","id":"course:70","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/5rlN7zpNdyprP6FCHKDKdrxeUgP0X3c3Y0pcdcY7.png","bgColor":"#A6D861","tags":["Страны и столицы"]},
      {"name":"Океания","id":"course:87","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/y1RgJGUraeO5ipFn0dkI3Qx57ugB98AO6nOmuQ8X.png","bgColor":"#72A1FF","tags":["Страны и столицы"]},
      {"name":"Бразилия","id":"course:109","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/XcjgiuaBVhqEpGj5VoPG4bUO7fUeqcL99MPNFpIl.png","bgColor":"#9CD861","tags":["Страны и столицы"]},
      {"name":"Египет","id":"course:102","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/nXTTw7jeqgnJrVIzeUtJm0j45FSP4fmdQS2GQN61.png","bgColor":"#FFBD61","tags":["Страны и столицы"]},
      {"name":"Мадагаскар","id":"course:106","image":"https://s3.logiclike.com/s3/logic-training/side-courses/files/ebSEozGaqCbeicUjfBSta1xobHdaxaH8zGpZTeYn.png","bgColor":"#36D9B0","tags":["Страны и столицы"]},
    ]
  } catch (err) {
    console.error('Error getAllData:', err)
    return null;
  }
}
