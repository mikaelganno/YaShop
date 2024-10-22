const products = [
    {
        "_id": 1,
        "name": "casque lenovo",
        "price": 80000,
        "prix": 90000,
        "quantity": 1,
        "image": "http://localhost:3000/electronic3.jpg",
        "alt": "alt1",
        "description": "0Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus cum ex rerum possimus libero ipsum soluta a aspernatur delectus qui eos, tempore sapiente incidunt sint ea maiores repellendus esse!",
        "colors": ["grey","black", "red"],
        "infosq1": "Brands",
        "infosq2": "Activity",
        "infosq3": "Material",
        "infosq4": "Gender",
        "infosr1": "Nike",
        "infosr2": "Running",
        "infosr3": "Fleece",
        "infosr4": "Men",
        "reviewn1": "Sarah",
        "reviewn2": "Faizal",
        "reviewd1": "7/3/24",
        "reviewd2": "1/3/24",
        "reviewt1": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventore.",
        "reviewt2": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventora."
    },
    {
        "_id": 2,
        "name": "iphone 13",
        "price": 380000,
        "prix": 460000,
        "quantity": 1,
        "image": "http://localhost:3000/electronic2.jpg",
        "alt": "alt2",
        "description": "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus cum ex rerum possimus libero ipsum soluta a aspernatur delectus qui eos, tempore sapiente incidunt sint ea maiores repellendus esse!",
        "colors": ["pink", "red", "black", "blue", "white", "green"],
        "infosq1": "Brands",
        "infosq2": "Activity",
        "infosq3": "Material",
        "infosq4": "Gender",
        "infosr1": "addidas",
        "infosr2": "Running",
        "infosr3": "Fleece",
        "infosr4": "Women",
        "reviewn1": "Sarah",
        "reviewn2": "Faizal",
        "reviewd1": "7/3/24",
        "reviewd2": "1/3/24",
        "reviewt1": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventore.",
        "reviewt2": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventora."
    },
    {
        "_id": 3,
        "name": "air force one",
        "price": 22500,
        "prix": 27000,
        "quantity": 1,
        "image": "http://localhost:3000/shoe5.jpg",
        "alt": "alt3",
        "description": "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus cum ex rerum possimus libero ipsum soluta a aspernatur delectus qui eos, tempore sapiente incidunt sint ea maiores repellendus esse!",
        "colors": ["blue", "black", "custom"],
        "infosq1": "Brands",
        "infosq2": "Activity",
        "infosq3": "Material",
        "infosq4": "Gender",
        "infosr1": "Kappa",
        "infosr2": "Running",
        "infosr3": "Fleece",
        "infosr4": "Women",
        "reviewn1": "Sarah",
        "reviewn2": "Faizal",
        "reviewd1": "7/3/24",
        "reviewd2": "1/3/24",
        "reviewt1": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventore.",
        "reviewt2": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventora."
    },
    {
        "_id": 4,
        "name": "new air force",
        "price": 25000,
        "prix": 29000,
        "quantity": 1,
        "image": "http://localhost:3000/shoe3.jpg",
        "alt": "alt4", 
        "description": "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus cum ex rerum possimus libero ipsum soluta a aspernatur delectus qui eos, tempore sapiente incidunt sint ea maiores repellendus esse!",
        "colors": ["white", "pink", "custom"],
        "infosq1": "Brands",
        "infosq2": "Activity",
        "infosq3": "Material",
        "infosq4": "Gender",
        "infosr1": "Puma",
        "infosr2": "Running",
        "infosr3": "Fleece",
        "infosr4": "Men",
        "reviewn1": "Sarah",
        "reviewn2": "Faizal",
        "reviewd1": "7/3/24",
        "reviewd2": "1/3/24",
        "reviewt1": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventore.",
        "reviewt2": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventora."
    },
    {
        "_id": 5,
        "name": "vonanda velvet sofa couch",
        "price": 65000,
        "prix": 77000,
        "quantity": 1,
        "image": "http://localhost:3000/home1.jpg",
        "alt": "alt5",
        "description": "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus cum ex rerum possimus libero ipsum soluta a aspernatur delectus qui eos, tempore sapiente incidunt sint ea maiores repellendus esse!",
        "colors": ["grey", "blue", "white"],
        "infosq1": "Brands",
        "infosq2": "Activity",
        "infosq3": "Material",
        "infosq4": "Gender",
        "infosr1": "Puma",
        "infosr2": "Running",
        "infosr3": "Fleece",
        "infosr4": "Women",
        "reviewn1": "Sarah",
        "reviewn2": "Faizal",
        "reviewd1": "7/3/24",
        "reviewd2": "1/3/24",
        "reviewt1": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventore.",
        "reviewt2": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventora."
    },
    {
        "_id": 6,
        "name": "modern storage cabinet",
        "price": 300000,
        "prix": 370000,
        "quantity": 1,
        "image": "http://localhost:3000/home3.jpg",
        "alt": "alt6",
        "description": "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus cum ex rerum possimus libero ipsum soluta a aspernatur delectus qui eos, tempore sapiente incidunt sint ea maiores repellendus esse!",
        "colors": ["white", "maroon", "black"],
        "infosq1": "Brands",
        "infosq2": "Activity",
        "infosq3": "Material",
        "infosq4": "Gender",
        "infosr1": "addidas",
        "infosr2": "Running",
        "infosr3": "Fleece",
        "infosr4": "Men",
        "reviewn1": "Sarah",
        "reviewn2": "Faizal",
        "reviewd1": "7/3/24",
        "reviewd2": "1/3/24",
        "reviewt1": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventore.",
        "reviewt2": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventora."
    },
    {
        "_id": 7,
        "name": "dimmable ceiling light modern",
        "price": 43000,
        "prix": 51000,
        "quantity": 1,
        "image": "http://localhost:3000/home2.jpg",
        "alt": "alt7",
        "description": "6Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus cum ex rerum possimus libero ipsum soluta a aspernatur delectus qui eos, tempore sapiente incidunt sint ea maiores repellendus esse!",
        "colors": ["red", "dark blue", "black"],
        "infosq1": "Brands",
        "infosq2": "Activity",
        "infosq3": "Material",
        "infosq4": "Gender",
        "infosr1": "Nike",
        "infosr2": "Running",
        "infosr3": "Fleece",
        "infosr4": "Women",
        "reviewn1": "Sarah",
        "reviewn2": "Faizal",
        "reviewd1": "7/3/24",
        "reviewd2": "1/3/24",
        "reviewt1": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventore.",
        "reviewt2": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventora."
    },
    {
        "_id": 8,
        "name": "women summer tosca shoe",
        "price": 18000,
        "prix": 20500,
        "quantity": 1,
        "image": "http://localhost:3000/shoe4.jpg",
        "alt": "alt8",
        "description": "7Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus cum ex rerum possimus libero ipsum soluta a aspernatur delectus qui eos, tempore sapiente incidunt sint ea maiores repellendus esse!",
        "colors": ["green", "maroon", "black"],
        "infosq1": "Brands",
        "infosq2": "Activity",
        "infosq3": "Material",
        "infosq4": "Gender",
        "infosr1": "Kappa",
        "infosr2": "Running",
        "infosr3": "Fleece",
        "infosr4": "Men",
        "reviewn1": "Sarah",
        "reviewn2": "Faizal",
        "reviewd1": "7/3/24",
        "reviewd2": "1/3/24",
        "reviewt1": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventore.",
        "reviewt2": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae hic impedit ipsum aperiam, ipsam expedita fuga quidem sint dolorum inventora."
    },
]; 

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))));
}

exports.findById = (id) => {
    return new Promise((resolve, reject) =>
        resolve(JSON.parse(JSON.stringify(products)).find(product =>
            product._id == id)
        )
    );
}