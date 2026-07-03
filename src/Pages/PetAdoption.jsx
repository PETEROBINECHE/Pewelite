import React, { useState } from 'react'
import { TbCurrencyNaira } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft } from "lucide-react";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";

const pawadoption = [
    // 1 — Dog (M, Parlor dog, calm)
    {
        id: "DG-83dj4r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/2bb88c5e-8ad9-4975-8431-2fd4b311acad_lbroiy.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063149/923c87ce-d9b3-4493-b06e-314e2ac4d33c_bggtyt.jpg",
        PerentBreedMom: "Parlor Dog",
        PerentBreedDad: "Parlor Dog",
        gender: "M",
        Name: "Max",
        btn: "I Like",
        numofpawav: "3",
        Breed: "Parlor Dog",
        Price: "400,000.00",
        PawBehaviour: "Calm",
        Age: "2y",
        Healthy: "98%",
        Weight: "30 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/2bb88c5e-8ad9-4975-8431-2fd4b311acad_lbroiy.jpg",
        type: "dog",
    },

    // 2 — Cat (M, Parlor cat, calm)
    {
        id: "CT-83d02r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063152/253806ea-dd2b-4d8d-bbc7-0ad38d7cc4c7_xh0uin.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063129/1e7aa2c5-d05d-49e6-b3ab-7c11acf13877_covl9e.jpg",
        PerentBreedMom: "Parlor Cat",
        PerentBreedDad: "Parlor Cat",
        gender: "M",
        Name: "Whiskers",
        btn: "I Like",
        numofpawav: "5",
        Breed: "Parlor Cat",
        Price: "300,000.00",
        PawBehaviour: "Calm",
        Age: "1y",
        Healthy: "98%",
        Weight: "3 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063153/a013902c-7714-44a6-a14d-c2900c896f8e_akgrf5.jpg",
        type: "cat",
    },

    // 3 — Hen (M, calm)
    {
        id: "HN-83d02r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063140/Rooster_jfbjbs.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063140/Rooster_jfbjbs.jpg",
        PerentBreedMom: "Broiler Hen",
        PerentBreedDad: "Rhode Island Rooster",
        gender: "M",
        Name: "Clucky",
        btn: "I Like",
        numofpawav: "12",
        Breed: "Broiler Hen",
        Price: "900.00",
        PawBehaviour: "Calm",
        Age: "6m",
        Healthy: "98%",
        Weight: "3 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063126/d9a0f2fe-46a4-4f28-913c-efcd2d6ad329_x6otuv.jpg",
        type: "hen",
    },

    // 4 — Cat (F, Parlor cat, calm)
    {
        id: "CT-l3dj4r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063152/253806ea-dd2b-4d8d-bbc7-0ad38d7cc4c7_xh0uin.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063153/a013902c-7714-44a6-a14d-c2900c896f8e_akgrf5.jpg",
        PerentBreedMom: "Parlor Cat",
        PerentBreedDad: "Parlor Cat",
        gender: "F",
        Name: "Luna",
        btn: "I Like",
        numofpawav: "4",
        Breed: "Parlor Cat",
        Price: "40,000.00",
        PawBehaviour: "Calm",
        Age: "3y",
        Healthy: "98%",
        Weight: "20 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063127/db001696-984e-4db0-866e-b7732e94f672_hbvrvp.jpg",
        type: "cat",
    },

    // 5 — Dog (M, Bowrbo, Aggressive)
    {
        id: "DG-83djxx",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063131/f3f7f246-fd8e-4e83-9d77-c8ec702fc789_a4vsig.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/2bb88c5e-8ad9-4975-8431-2fd4b311acad_lbroiy.jpg",
        PerentBreedMom: "Bowrbo Dog",
        PerentBreedDad: "Bowrbo Dog",
        gender: "M",
        Name: "Rex",
        btn: "I Like",
        numofpawav: "2",
        Breed: "Bowrbo Dog",
        Price: "800,000.00",
        PawBehaviour: "Aggressive",
        Age: "4y",
        Healthy: "98%",
        Weight: "13 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063131/f3f7f246-fd8e-4e83-9d77-c8ec702fc789_a4vsig.jpg",
        type: "dog",
    },

    // 6 — Bird (M, calm)
    {
        id: "BD-ppsj4r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063142/50fcd4c9-03e3-4826-ad67-23edbf8b7eca_cc6gb3.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063152/50403550-a6a7-45c9-b2b3-f2061e56544a_zariha.jpg",
        PerentBreedMom: "Parlor Bird",
        PerentBreedDad: "Parlor Bird",
        gender: "M",
        Name: "Sky",
        btn: "I Like",
        numofpawav: "6",
        Breed: "Parlor Bird",
        Price: "120,000.00",
        PawBehaviour: "Calm",
        Age: "1y",
        Healthy: "98%",
        Weight: "8 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063142/50fcd4c9-03e3-4826-ad67-23edbf8b7eca_cc6gb3.jpg",
        type: "bird",
    },

    // 7 — Rabbit (F, calm)
    {
        id: "RT-dime43",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063124/4c835e86-b1cd-4026-9812-5a114b83e039_nx4vbc.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063140/9f72feb2-d1bc-4535-9341-8187c22cf4b6_w53eqr.jpg",
        PerentBreedMom: "Flemish Giant Rabbit",
        PerentBreedDad: "Flemish Giant Rabbit",
        gender: "F",
        Name: "Bunny",
        btn: "I Like",
        numofpawav: "4",
        Breed: "Flemish Giant Rabbit",
        Price: "200,000.00",
        PawBehaviour: "Calm",
        Age: "8m",
        Healthy: "98%",
        Weight: "200 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063140/9f72feb2-d1bc-4535-9341-8187c22cf4b6_w53eqr.jpg",
        type: "Rabbit",
    },

    // 8 — Hen / Rooster (F, calm)
    {
        id: "HN-dime44",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063126/d9a0f2fe-46a4-4f28-913c-efcd2d6ad329_x6otuv.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063140/Rooster_jfbjbs.jpg",
        PerentBreedMom: "Rhode Island Red Hen",
        PerentBreedDad: "Rhode Island Red Rooster",
        gender: "F",
        Name: "Rosie",
        btn: "I Like",
        numofpawav: "10",
        Breed: "Rhode Island Red",
        Price: "35,000.00",
        PawBehaviour: "Calm",
        Age: "4m",
        Healthy: "98%",
        Weight: "8 pound",
        Height: "0.5 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063140/Rooster_jfbjbs.jpg",
        type: "hen",
    },

    // 9 — Pig (F, calm)
    {
        id: "PG-dime45",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/6c4334ec-d64b-499b-9af7-ed1274c1bba0_utcsjp.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/6c4334ec-d64b-499b-9af7-ed1274c1bba0_utcsjp.jpg",
        PerentBreedMom: "Duroc Sow",
        PerentBreedDad: "Duroc Boar",
        gender: "F",
        Name: "Peppa",
        btn: "I Like",
        numofpawav: "3",
        Breed: "Duroc Pig",
        Price: "90,000.00",
        PawBehaviour: "Calm",
        Age: "1y",
        Healthy: "98%",
        Weight: "200 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/6c4334ec-d64b-499b-9af7-ed1274c1bba0_utcsjp.jpg",
        type: "pig",
    },

    // 10 — Cow (F, calm)
    {
        id: "CW-dime46",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063154/a6ce96bc-93a8-42e8-be11-dc807efb2849_gbdvfj.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063154/a6ce96bc-93a8-42e8-be11-dc807efb2849_gbdvfj.jpg",
        PerentBreedMom: "Holstein Cow",
        PerentBreedDad: "Holstein Bull",
        gender: "F",
        Name: "Bella",
        btn: "I Like",
        numofpawav: "2",
        Breed: "Holstein",
        Price: "150,000.00",
        PawBehaviour: "Calm",
        Age: "3y",
        Healthy: "98%",
        Weight: "1200 pound",
        Height: "1.5 meter",
        Length: "2 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063154/a6ce96bc-93a8-42e8-be11-dc807efb2849_gbdvfj.jpg",
        type: "cow",
    },

    // 11 — Rabbit (F, calm)
    {
        id: "RT-dime47",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063124/4c835e86-b1cd-4026-9812-5a114b83e039_nx4vbc.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063140/9f72feb2-d1bc-4535-9341-8187c22cf4b6_w53eqr.jpg",
        PerentBreedMom: "Mini Lop Rabbit",
        PerentBreedDad: "Mini Lop Rabbit",
        gender: "F",
        Name: "Daisy",
        btn: "I Like",
        numofpawav: "5",
        Breed: "Mini Lop",
        Price: "60,000.00",
        PawBehaviour: "Calm",
        Age: "6m",
        Healthy: "98%",
        Weight: "6 pound",
        Height: "0.3 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063124/4c835e86-b1cd-4026-9812-5a114b83e039_nx4vbc.jpg",
        type: "Rabbit",
    },

    // 12 — Bird (M, calm)
    {
        id: "BD-0943ik",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063142/50fcd4c9-03e3-4826-ad67-23edbf8b7eca_cc6gb3.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063152/50403550-a6a7-45c9-b2b3-f2061e56544a_zariha.jpg",
        PerentBreedMom: "Macaw",
        PerentBreedDad: "Macaw",
        gender: "M",
        Name: "Rio",
        btn: "I Like",
        numofpawav: "4",
        Breed: "Macaw",
        Price: "353,000.00",
        PawBehaviour: "Calm",
        Age: "2y",
        Healthy: "98%",
        Weight: "40 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063152/50403550-a6a7-45c9-b2b3-f2061e56544a_zariha.jpg",
        type: "bird",
    },

    // 13 — Cat (F, House cat, calm)
    {
        id: "CT-8vrj4r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063127/db001696-984e-4db0-866e-b7732e94f672_hbvrvp.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063153/a013902c-7714-44a6-a14d-c2900c896f8e_akgrf5.jpg",
        PerentBreedMom: "House Cat",
        PerentBreedDad: "House Cat",
        gender: "F",
        Name: "Mittens",
        btn: "I Like",
        numofpawav: "6",
        Breed: "House Cat",
        Price: "60,000.00",
        PawBehaviour: "Calm",
        Age: "4y",
        Healthy: "98%",
        Weight: "30 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063152/253806ea-dd2b-4d8d-bbc7-0ad38d7cc4c7_xh0uin.jpg",
        type: "cat",
    },

    // 14 — Sheep (F, calm)
    {
        id: "SP-8vrj4r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063154/a508bc77-4cf4-4176-b2e7-967cd216c160_tfcid7.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063147/661f0e72-1a7a-415a-a8c6-5be957c2002f_jvwcyn.jpg",
        PerentBreedMom: "Merino Ewe",
        PerentBreedDad: "Merino Ram",
        gender: "F",
        Name: "Fluffy",
        btn: "I Like",
        numofpawav: "4",
        Breed: "Merino Sheep",
        Price: "60,000.00",
        PawBehaviour: "Calm",
        Age: "2y",
        Healthy: "98%",
        Weight: "100 pound",
        Height: "0.8 meter",
        Length: "1.5 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063154/a508bc77-4cf4-4176-b2e7-967cd216c160_tfcid7.jpg",
        type: "sheep",
    },

    // 15 — Dog (M, Parlor dog, calm)
    {
        id: "DG-83ddde",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/2bb88c5e-8ad9-4975-8431-2fd4b311acad_lbroiy.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063149/923c87ce-d9b3-4493-b06e-314e2ac4d33c_bggtyt.jpg",
        PerentBreedMom: "Parlor Dog",
        PerentBreedDad: "Parlor Dog",
        gender: "M",
        Name: "Bruno",
        btn: "I Like",
        numofpawav: "3",
        Breed: "Parlor Dog",
        Price: "180,000.00",
        PawBehaviour: "Calm",
        Age: "3y",
        Healthy: "98%",
        Weight: "55 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063148/948c4cb7-97e8-4245-b4d0-858a04df9ef3_ftdnfp.jpg",
        type: "dog",
    },

    // 16 — Goat (M, calm)
    {
        id: "GT-83ddde",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063135/Goat_Farm_d7ecpw.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063142/Yapay_Zeka_ile_m9p16i.jpg",
        PerentBreedMom: "Boer Nanny",
        PerentBreedDad: "Boer Billy",
        gender: "M",
        Name: "Billy",
        btn: "I Like",
        numofpawav: "5",
        Breed: "Boer Goat",
        Price: "180,000.00",
        PawBehaviour: "Calm",
        Age: "1y",
        Healthy: "98%",
        Weight: "55 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/f8d93426-b516-40f2-9aff-c8a59c03e533_qsenu5.jpg",
        type: "goat",
    },

    // 17 — Dog (M, Parlor dog, calm)
    {
        id: "DG-83diop",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063148/948c4cb7-97e8-4245-b4d0-858a04df9ef3_ftdnfp.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063131/f3f7f246-fd8e-4e83-9d77-c8ec702fc789_a4vsig.jpg",
        PerentBreedMom: "Parlor Dog",
        PerentBreedDad: "Parlor Dog",
        gender: "M",
        Name: "Rocky",
        btn: "I Like",
        numofpawav: "2",
        Breed: "Parlor Dog",
        Price: "210,000.00",
        PawBehaviour: "Calm",
        Age: "5m",
        Healthy: "98%",
        Weight: "60 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063149/923c87ce-d9b3-4493-b06e-314e2ac4d33c_bggtyt.jpg",
        type: "dog",
    },

    // 18 — Cat (F, Loddom breed, calm)
    {
        id: "CT-3esj4r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063127/db001696-984e-4db0-866e-b7732e94f672_hbvrvp.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063153/a013902c-7714-44a6-a14d-c2900c896f8e_akgrf5.jpg",
        PerentBreedMom: "Loddom Cat",
        PerentBreedDad: "Loddom Cat",
        gender: "F",
        Name: "Cleo",
        btn: "I Like",
        numofpawav: "4",
        Breed: "Loddom Breed",
        Price: "290,000.00",
        PawBehaviour: "Calm",
        Age: "6m",
        Healthy: "98%",
        Weight: "70 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063129/1e7aa2c5-d05d-49e6-b3ab-7c11acf13877_covl9e.jpg",
        type: "cat",
    },

    // 19 — Pig (F, calm)
    {
        id: "PG-3esj4r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/6c4334ec-d64b-499b-9af7-ed1274c1bba0_utcsjp.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/6c4334ec-d64b-499b-9af7-ed1274c1bba0_utcsjp.jpg",
        PerentBreedMom: "Large White Sow",
        PerentBreedDad: "Large White Boar",
        gender: "F",
        Name: "Pinky",
        btn: "I Like",
        numofpawav: "4",
        Breed: "Large White Pig",
        Price: "80,000.00",
        PawBehaviour: "Calm",
        Age: "2y",
        Healthy: "98%",
        Weight: "180 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/6c4334ec-d64b-499b-9af7-ed1274c1bba0_utcsjp.jpg",
        type: "pig",
    },

    // 20 — Duck (F, calm)
    {
        id: "DK-3esj4r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063130/4b9562ac-6f6c-4e26-bd32-e3605b1b0801_nu4yat.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063130/4b9562ac-6f6c-4e26-bd32-e3605b1b0801_nu4yat.jpg",
        PerentBreedMom: "Pekin Duck",
        PerentBreedDad: "Pekin Drake",
        gender: "F",
        Name: "Ducky",
        btn: "I Like",
        numofpawav: "8",
        Breed: "Pekin Duck",
        Price: "72,000.00",
        PawBehaviour: "Calm",
        Age: "1y",
        Healthy: "98%",
        Weight: "9 pound",
        Height: "0.5 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063130/4b9562ac-6f6c-4e26-bd32-e3605b1b0801_nu4yat.jpg",
        type: "duck",
    },

    // 21 — Goat (F, calm)
    {
        id: "GT-3esj4r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063135/Goat_Farm_d7ecpw.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063142/Yapay_Zeka_ile_m9p16i.jpg",
        PerentBreedMom: "Saanen Nanny",
        PerentBreedDad: "Saanen Billy",
        gender: "F",
        Name: "Nanny",
        btn: "I Like",
        numofpawav: "3",
        Breed: "Saanen Goat",
        Price: "90,000.00",
        PawBehaviour: "Calm",
        Age: "2y",
        Healthy: "98%",
        Weight: "70 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063142/Yapay_Zeka_ile_m9p16i.jpg",
        type: "goat",
    },

    // 22 — Sheep (F, calm)
    {
        id: "SP-3esj4r",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063154/a508bc77-4cf4-4176-b2e7-967cd216c160_tfcid7.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063147/661f0e72-1a7a-415a-a8c6-5be957c2002f_jvwcyn.jpg",
        PerentBreedMom: "Dorper Ewe",
        PerentBreedDad: "Dorper Ram",
        gender: "F",
        Name: "Woolly",
        btn: "I Like",
        numofpawav: "4",
        Breed: "Dorper Sheep",
        Price: "390,000.00",
        PawBehaviour: "Calm",
        Age: "3y",
        Healthy: "98%",
        Weight: "130 pound",
        Height: "0.9 meter",
        Length: "1.5 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063147/661f0e72-1a7a-415a-a8c6-5be957c2002f_jvwcyn.jpg",
        type: "sheep",
    },

    // 23 — Goat (F, calm)
    {
        id: "GT-3esj4s",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063142/Yapay_Zeka_ile_m9p16i.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063132/f8d93426-b516-40f2-9aff-c8a59c03e533_qsenu5.jpg",
        PerentBreedMom: "Boer Nanny",
        PerentBreedDad: "Boer Billy",
        gender: "F",
        Name: "Patches",
        btn: "I Like",
        numofpawav: "6",
        Breed: "Boer Goat",
        Price: "50,000.00",
        PawBehaviour: "Calm",
        Age: "1y",
        Healthy: "98%",
        Weight: "70 pound",
        Height: "1 meter",
        Length: "1 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063135/Goat_Farm_d7ecpw.jpg",
        type: "goat",
    },

    // 24 — Sheep (F, calm)
    {
        id: "SP-3esj4s",
        perentmomimg: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063147/661f0e72-1a7a-415a-a8c6-5be957c2002f_jvwcyn.jpg",
        perentDadimg:  "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063154/a508bc77-4cf4-4176-b2e7-967cd216c160_tfcid7.jpg",
        PerentBreedMom: "Suffolk Ewe",
        PerentBreedDad: "Suffolk Ram",
        gender: "F",
        Name: "Cotton",
        btn: "I Like",
        numofpawav: "3",
        Breed: "Suffolk Sheep",
        Price: "45,000.00",
        PawBehaviour: "Calm",
        Age: "2y",
        Healthy: "98%",
        Weight: "100 pound",
        Height: "0.8 meter",
        Length: "1.5 feet",
        adoptionimage: "https://res.cloudinary.com/dmqhseusw/image/upload/v1778063139/6fd3481f-a081-44eb-9bdd-df88439f10b5_z2s2pj.jpg",
        type: "sheep",
    },
];

function PetAdoption() {

  const [serviceModel, setServiceModel] = useState(false)
  const [serviceFrom, setServiceFrom] = useState({
  dlidate: "",
  dlitime: "",
  pawownername: "",
  pawownernumber: "",
  pawownweraddress: "",
  pawownwerID: "",
  pickoffname: "",
  pickoftel: "",
  pickoffcode: "",
  pickoffaddress: "",
  pickofftime: "",
  })
  const [Showperent, SetShowperent] = useState(false);
  const [Showeye, SetShoweye] = useState(false);

  const navigate = useNavigate();
  
  const { id } = useParams();
  const singleProduct = pawadoption.find(adop => adop.id === id)

  function closeModal() {
    navigate("/pawadoption");
  }

  function openperent() {
    SetShoweye(!Showeye),
    SetShowperent(true)
  }

  function closeperent() {
    SetShoweye(false),
    SetShowperent(false)
  }

  return (
    <div className='w-full h-min '>
      <main className='w-full h-screen px-4 bg-amber-500 flex gap-1'>
        <div className='w-120 h-screen bg-red-500'>
            <div className='p-3 text-xl text-[#252839] cursor-pointer flex items-center' onClick={()=> navigate(-1)}>
              <ChevronLeft className=''/>
              <span>Back</span>
            </div>
            <div className='p-3 gap-5 flex flex-col text-[#252839]'>
                <h2 className='font-bold font-poppins text-8xl'>Happy Paw</h2>
                <h2 className='font-bold font-poppins text-8xl'>Happy Home</h2>
                <h2 className='font-bold font-poppins text-4xl'>Save Community</h2>
            </div>
        </div>
        <div className='w-190 h-screen bg-pink-500 p-2 relative'>
            <div className='bg-blue-400 w-50 h-50 rounded-full border border-b-gray-950 absolute right-85'></div>
            <div className='bg-blue-400 w-60 h-60 rounded-full border border-b-gray-950 absolute right-10 bottom-95'></div>
            <div className='bg-blue-400 w-55 h-55 rounded-full border border-b-gray-950 absolute right-2 bottom-35 '></div>
            <div className='bg-blue-400 w-40 h-40 rounded-full border border-b-gray-950 absolute left-10'></div>
            <div className='bg-blue-400 w-40 h-40 rounded-full border border-b-gray-950 absolute -left-40 -bottom-5'></div>
            <div className='bg-blue-400 w-50 h-50 rounded-full border border-b-gray-950 absolute right-45 bottom-2 '></div>
        </div>
      </main>

        <motion.section
        className='w-full h-min px-4 py-2 flex gap-1 flex-row flex-wrap gap-x-10 gap-y-3 justify-around'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
        {pawadoption.map((adop)=> (
            <motion.div
            // key={adop.id}
            className="product-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            >
          <div key={adop.id} className='w-80 h-125 p-2 bg-[#252839aa] flex flex-col items-center justify-between'>
            <div className='w-60 h-60 rounded-full flex items-center justify-center border-4 border-gray-300'>
              <img src={adop.adoptionimage} alt=""
              className='rounded-full w-55 h-55 object-cover' 
              />
            </div>
            <div className='w-75 h-58 bg-white flex flex-col p-2 gap-2 text-[#252839]'>
                <span className='font-semibold font-mono'> Name: <span className='font-normal'>{adop.Name}</span></span>

                <div className='flex flex-row justify-between'>
                    <span className='font-semibold font-mono'>Age: <span className='font-normal'>{adop.Age}</span></span>
                    <span className='font-semibold font-mono'>Breed: <span className='font-normal text-sm'>{adop.Breed}</span></span>
                </div>

                <div className='flex flex-row flex-wrap justify-between'>
                    <span className='font-semibold font-mono'>Height: <span className='font-normal text-sm'>{adop.Height}</span></span>
                    <span className='font-semibold font-mono'>Length: <span className='font-normal text-sm'>{adop.Length}</span></span>
                    <span className='font-semibold font-mono'>Weight: <span className='font-normal text-sm'>{adop.Height}</span></span>
                    <span className='font-semibold font-mono'>Healthy: <span className='font-normal text-sm'>{adop.Healthy}</span></span>
                </div>

                <div>
                    <p className='font-semibold font-mono'>Paw Behaviour: <span className='font-normal'>{adop.PawBehaviour}</span></p>
                    <p className='font-semibold font-mono'>Gender: <span className='font-normal'>{adop.gender}</span></p>
                </div>
               
                <div className='flex px-2 justify-between items-center border border-[#252839] py-1'>
                    <p className='font-semibold font-mono text-xl flex'>Price: <span className='font-normal text-[16px] flex items-center'><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />{adop.Price}</span></p>
                    <Link to={`/product/${adop.id}`} >
                      <button className='px-3 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]' >{adop.btn}</button>
                    </Link>
                </div>
            </div>
        </div> 
        </motion.div> 
        ))}
        </motion.section>


       {
        singleProduct && (
          <div onClick={closeModal} className='bg-gray-400 w-full h-screen flex items-center justify-center fixed top-0 z-999'>
          <div onClick={(e) => e.stopPropagation()} className='bg-gray-100 w-250 h-130 relative p-2 flex items-center justify-center rounded-2xl'>
            <span className='p-3 bg-[#252839] rounded text-[#F2B632] absolute right-3 top-3 cursor-pointer hover:bg-red-600 hover:text-white' onClick={closeModal}>
              X
            </span>

            <div className='w-220 h-120 bg-amber-400 p-5 flex gap-8 items-center justify-center rounded-2xl'>
              <div className='w-70 h-100 bg-green-500 flex flex-col justify-between'>
                <div className='w-70 h-80 bg-blue-500 rounded-xl'>
                  <img src={singleProduct.adoptionimage} 
                  alt="DisplayProduct" 
                  className='rounded-b-xl w-70 h-80'
                  />
                </div>
                <div className='w-70 h-15 bg-pink-500'>
                    <div className='flex flex-row gap-4 items-center p-3'  >
                    <span>Num of Paw Available</span>
                  
                    <div className='flex flex-row gap-2 border w-20 items-center justify-center rounded px-2'>
                        <span className='text-2xl'>{singleProduct.numofpawav}</span>
                    </div>
                  </div>

                </div>
              </div>
              
              <div className='w-120 h-110 bg-red-500 rounded-xl p-2.5 gap-6 flex flex-col text-[#252839]'>
                <div className='w-115 h-50 bg-white flex flex-col p-2 gap-2 text-[#252839]'>
                <span className='font-semibold font-mono'> Name: <span className='font-normal'>{singleProduct.Name}</span></span>

                <div className='flex flex-row justify-between'>
                    <span className='font-semibold font-mono'>Age: <span className='font-normal'>{singleProduct.Age}</span></span>
                    <span className='font-semibold font-mono'>Paw Breed: <span className='font-normal'>{singleProduct.Breed}</span></span>
                </div>

                <div className='grid grid-cols-2 gap-1'>
                    <span className='font-semibold font-mono'>Height: <span className='font-normal'>{singleProduct.Height}</span></span>
                    <span className='font-semibold font-mono flex justify-end gap-1'>Length: <span className='font-normal'>{singleProduct.Length}</span></span>
                    <span className='font-semibold font-mono'>Weight: <span className='font-normal'>{singleProduct.Weight}</span></span>
                    <span className='font-semibold font-mono flex justify-end gap-1'>Healthy: <span className='font-normal'>{singleProduct.Healthy}</span></span>
                </div>

                <div className='grid grid-cols-2 gap-1'> 
                    <p className='font-semibold font-mono w-80'>Paw Behaviour: <span className='font-normal'>{singleProduct.PawBehaviour}</span></p>
                    <p className='font-semibold font-mono flex justify-end gap-1'>Gender: <span className='font-normal'>{singleProduct.gender}</span></p>
                </div>

                <div className='grid grid-cols-2 gap-1 '>
                    <p className='font-semibold font-mono flex items-center gap-2'>perent Breed: <span className='font-normal' onClick={openperent}>{Showeye ? <FaEye /> : <FaEyeLowVision />}</span></p>
                </div>
            </div>
                <div className='grid grid-cols-3 gap-1'>

                  <div className='flex flex-col gap-1' >
                    <span>Num of paw</span>
                  
                    <div className='flex flex-row gap-4 border w-25 items-center justify-center rounded px-2'>
                        <span className='text-2xl cursor-pointer font-bold'>+</span>
                        <span className='text-2xl'>1</span>
                        <span className='text-2xl cursor-pointer font-bold'>-</span>
                    </div>
                  </div>

                  

                  <div className='flex flex-col gap-1.5 items-center'>
                    <p className='text-[#252839] textflex flex-col gap-1 font-medium '>Price per one</p>
                    <span className='flex flex-row items-center text-base '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />{singleProduct.Price}</span>
                  </div>

                  <div className='flex flex-col gap-1.5  items-end'>
                    <p className='text-[#252839] text-xl font-medium'>Total Price:</p>
                    <span className='flex flex-row items-center text-base '><TbCurrencyNaira className='text-[#222222] text-xl font-nomal' />400000</span>
                  </div>
                </div>

                <div className=' flex flex-col gap-4'>
                   <button className='px-3 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]' onClick={()=> navigate(-1)}> Add to Order</button>
                  <button className='px-3 py-2 rounded cursor-pointer bg-[#252839] text-[#F2B632]  hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]' onClick={()=> setServiceModel(true)}> Proceed to Payment</button>
                </div>
              </div>
            </div>
          </div>
      </div>
        )
      }

      {
        Showperent && (
          <div className="w-full h-screen bg-[#ffffff1c] p-2 fixed top-0 z-999 justify-center items-center flex" onClick={closeperent}>
            <div onClick={(e) => e.stopPropagation()} className='relative'>
              <span className='p-3 bg-[#252839] rounded text-[#F2B632] absolute right-3 top-3 cursor-pointer hover:bg-red-600 hover:text-white' onClick={closeperent}>
                X
              </span>
              <div className='w-150 h-90 bg-blue-200 grid grid-cols-2 p-2 gap-2'>
                <div className='flex flex-col gap-3 border justify-center items-center'>
                  <div className='border w-45 h-60'>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <p className='font-semibold'>Dad Breed: <span className='font-normal'>parlor dog</span></p>
                    <p className='font-semibold'>Age: <span className='font-normal'>2y</span></p>
                  </div>
                </div>

                <div className='flex flex-col gap-3 border justify-center items-center'>
                  <div className='border w-45 h-60'>
                    <img src="" alt="" />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>Mom Breed: <span className='font-normal'>parlor dog</span></p>
                    <p className='font-semibold'>Age: <span className='font-normal'>1y-6m</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {serviceModel && (
        <section className="w-full h-screen bg-[#ffffff4b] p-2 fixed top-0 z-999 justify-end flex">
          <div className="w-150 h-min bg-[#ffffff] flex flex-col gap-4 p-2 overflow-y-auto no-scrollbar scroll-smooth">

            <span className='p-3 bg-[#252839] rounded text-[#F2B632] absolute right-3 top-3 cursor-pointer font-semibold hover:bg-red-600 hover:text-white' onClick={() => setServiceModel(false)}>
            X
            </span>

            <div className="w-150 flex justify-center">
              <span className="text-[24px] font-bold font-poppins text-[#252839]">Pet Adoption </span>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-[18px] font-semibold font-poppins text-[#252839]">
                Dlivery time and date
                <p className="text-[14px] font-normal font-poppins text-[#252839]">Note this means the date and time paw should be avalable for pick-up or delivery.</p>
              </span>

              <span className="flex gap-4">
              <input type="date" 
              name="dlidate" 
              id=""
              value={serviceFrom.dlidate}
              onChange={(e) => setServiceFrom({...serviceFrom, dlidate: (e.target.value) })}
              className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70"
              />

              <input type="time" 
              name="dlitime" 
              id=""
              value={serviceFrom.dlitime}
              onChange={(e) => setServiceFrom({...serviceFrom, dlitime: (e.target.value) })} 
              className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70"
              />
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-[18px] font-bold font-poppins text-[#252839]">
                Owner Infom <span className="required text-red-400">*</span>
              </label>

              <div className=" flex gap-4 flex-wrap">
                <input type="Text" 
                name="pawownername" 
                id=""
                value={serviceFrom.pawownername}
                onChange={(e) => setServiceFrom({...serviceFrom, pawownername: (e.target.value) })} 
                placeholder="Paw owner name"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

                <input type="Tel" 
                name="pawownernumber" 
                id="" 
                value={serviceFrom.pawownernumber}
                onChange={(e) => setServiceFrom({...serviceFrom, pawownernumber: (e.target.value) })}
                placeholder="Paw owner number"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

                <input type="text" 
                name="pawownweraddress" 
                id=""
                value={serviceFrom.pawownweraddress}
                onChange={(e) => setServiceFrom({...serviceFrom, pawownweraddress: (e.target.value) })} 
                placeholder="Paw owner address"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />

                <input type="text" 
                name="pawownwerID" 
                id=""
                value={serviceFrom.pawownwerID}
                onChange={(e) => setServiceFrom({...serviceFrom, pawownwerID: (e.target.value) })} 
                placeholder="Paw owner I.D"
                className="outline-none border-2 border-[#d1d5db] px-3 py-2 w-70 font-semibold"
                />


              </div>
            </div>

            <div className="mb-5 flex justify-end">
              <Link to={`/summary1`} >
              <button type="submit"  className='p-3 rounded-xl cursor-pointer bg-[#252839] text-[#F2B632] text-xl hover:bg-[#F2B632] hover:font-semibold hover:text-[#252839]'>
                Proceed to Payment
              </button>
              </Link>
            </div>

          </div>
        </section>
      )}

    </div>
  )
}

export default PetAdoption
