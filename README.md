# 📸 Node Image Compressor    

A simple and lightweight **Node.js package** for compressing images using the `sharp` library.  

## 🚀 Features  
✅ Easy to use  
✅ Supports **JPEG** compression  
✅ CLI support for quick compression  
✅ Works in both **Node.js applications** and **command-line tools**  

---

## 📦 Installation  

### **Install Globally (for CLI use)**  
```sh
npm install -g pic-press
```

Now you can use the `compress` command in your terminal.


## Install Locally (for Node.js projects)

```bash
npm install pic-press
```


## 🔧 Usage

## **1️⃣ Using CLI**
Run the following command to compress an image:

```sh
compress <inputPath> <outputPath> [quality]
```

- <inputPath> → Path to the input image.
- <outputPath> → Path to save the compressed image.
- [quality] (optional) → Compression quality (default: 80, range: 1-100).

**Example**

```sh
compress input.jpg output.jpg 70
```
This will compress `input.jpg` to `output.jpg` with 70% quality.


## **2️⃣ Using in a Node.js Project**

**import the package**

```javascript
const { compressImage } = require("press-pic");
```

**Example code:**

```javascript
const { compressImage } = require("pic-press");

const inputPath = "input.jpg";
const outputPath = "compressed.jpg";
const quality = 75;

compressImage(inputPath, outputPath, quality)
  .then(() => console.log("Compression successful!"))
  .catch((err) => console.error("Error:", err));
```


## ** 🛠 Requirements**

- Node.js v12 or later.
- `sharp` package (installed automatically).


## **📄 License**

This project is licensed under the MIT License.


## **💡 Contributing**

Contributions are welcome! Feel free to open an issue or submit a pull request.


## **📬 Support**

If you encounter any issues, please open an issue on GitHub.
Happy Coding! 🚀

```bash

---

### **Next Steps**
- Replace `your-username` with your GitHub username in the links.  
- Once your package is published, update the actual **npm URL** in the badges.  

Let me know if you want any changes! 🚀
```