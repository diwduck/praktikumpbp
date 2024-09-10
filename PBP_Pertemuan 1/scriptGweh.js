function generateRandomChar() {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex); 
}

function generateCaptcha() {
    captcha = '';
    for (i = 0; i < 5; i++) {
        captcha += generateRandomChar();
    }
    return captcha;
}

function setCaptcha() {
    captchaElement = document.querySelector('#captcha');
    captchaValue = generateCaptcha();
    captchaElement.innerHTML = captchaElement.value = captchaValue;
}

function checkCaptcha() {
    userInput = document.forms['productForformProduk']['captcha-form'].value;
    captchaValue = document.getElementById('captcha').value;
    captchaError = document.getElementById('error-captcha');

    captchaError.innerHTML = '';

    if (userInput === captchaValue) {
        return true;
    } else {
        captchaError.innerHTML = 'Captcha salah!';
        alert("Captcha salah!");
        setCaptcha();
        return false;
    }
}

function resetCaptcha() {
    setCaptcha();
    document.getElementById('captcha-form').value = '';

    document.getElementById('error-captcha').innerHTML = '';
}

window.addEventListener('load', setCaptcha);

function clearErrorMessages() {
    spans = document.getElementsByTagName('span');

    for (i = 0; i < spans.length; i++) {
        spans[i].innerHTML = '';
    }
}

function makeSubCategory(selectElement, options) {
    for (i = 0; i < options.length; i++) {
        option = document.createElement('option');
        option.value = options[i].value;
        option.text = options[i].text;
        selectElement.appendChild(option);
    }
}

function clearSubCategory() {
    subCategoryContent = document.getElementById('subDropdown');
    subCategoryContent.innerHTML =
        '<option value="default" disabled selected>--Pilih Sub-Kategori--</option>';
    subCategoryContent.disabled = true;
}

function subCategoryDropdown() {
    subCategoryContent = document.getElementById('subDropdown');
    category = document.forms['formProduk']['product-category'].value;

    subCategoryContent.innerHTML =
        '<option value="default" disabled selected>--Pilih Sub-Kategori--</option>';

    if (category === 'default') {
        subCategoryContent.disabled = true;
        return;
    }

    subCategoryContent.disabled = false;

    optionsBaju = [
        { value: 'baju-pria', text: 'Baju Pria' },
        { value: 'baju-wanita', text: 'Baju Wanita' },
        { value: 'baju-anak', text: 'Baju Anak' },
    ];

    optionsElektronik = [
        { value: 'mesin-cuci', text: 'Mesin Cuci' },
        { value: 'kulkas', text: 'Kulkas' },
        { value: 'ac', text: 'AC' },
    ];

    optionsAlatTulis = [
        { value: 'kertas', text: 'Kertas' },
        { value: 'map', text: 'Map' },
        { value: 'pulpen', text: 'Pulpen' },
    ];

    if (category === 'baju') {
        makeSubCategory(subCategoryContent, optionsBaju);
    } else if (category === 'elektronik') {
        makeSubCategory(subCategoryContent, optionsElektronik);
    } else if (category === 'alat-tulis') {
        makeSubCategory(subCategoryContent, optionsAlatTulis);
    }
}

function wholesaleControl() {
    wholesaleSelector = document.forms['formProduk']['product-wholesale'];
    wholesalePrice = document.forms['formProduk']['product-wholesale-price'];
    wholesalePrice.disabled = false;

    if (wholesaleSelector.value === 'tidak') {
        wholesalePrice.disabled = true;
        wholesalePrice.value = '';
    }
}

function validateName() {
    name = document.forms['formProduk']['product-name'].value;
    nameError = document.getElementById('error-name');

    nameError.innerHTML = '';

    if (name.length === 0) {
        nameError.innerHTML = 'Nama produk harus diisi';
        alert("Nama produk harus diisi");
        return false;
    }

    if (name.length < 5 || name.length > 30) {
        nameError.innerHTML = 'Nama produk harus berukuran 5-30 karakter';
        alert("Nama produk harus berukuran 5-30 karakter");
        return false;
    }

    return true;
}

function validateDesc() {
    desc = document.forms['formProduk']['product-desc'].value;
    descError = document.getElementById('error-desc');

    descError.innerHTML = '';

    if (desc.length === 0) {
        descError.innerHTML = 'Deskripsi produk harus diisi';
        alert("Deskripsi produk harus diisi");
        return false;
    }

    if (desc.length < 5 || desc.length > 100) {
        descError.innerHTML = 'Deskripsi produk harus berukuran 5-100 karakter';
        alert("Deskripsi produk harus berukuran 5-100 karakter");
        return false;
    }

    return true;
}

function validateCategory() {
    category = document.forms['formProduk']['product-category'].value;
    categoryError = document.getElementById('error-category');

    categoryError.innerHTML = '';

    if (category === 'default') {
        categoryError.innerHTML = 'Kategori produk harus dipilih';
        alert("Kategori produk harus dipilih");
        return false;
    }

    return true;
}

function validateSubCategory() {
    subCategory = document.forms['formProduk']['product-sub-category'].value;
    subCategoryError = document.getElementById('error-sub-category');

    subCategoryError.innerHTML = '';

    if (subCategory === 'default') {
        subCategoryError.innerHTML = 'Sub-kategori produk harus dipilih';
        alert("Sub-kategori produk harus dipilih");
        return false;
    }

    return true;
}

function validateUnitPrice() {
    unitPrice = document.forms['formProduk']['product-unit-price'].value;
    unitPriceError = document.getElementById('error-unit-price');

    unitPriceError.innerHTML = '';

    if (unitPrice.length === 0) {
        unitPriceError.innerHTML = 'Harga satuan produk harus diisi';
        alert("Harga satuan produk harus diisi");
        return false;
    }

    return true;
}

function validateWholesale() {
    wholesale = document.forms['formProduk']['product-wholesale'];
    wholesaleError = document.getElementById('error-wholesale');

    wholesaleError.innerHTML = '';

    if (!wholesale[0].checked && !wholesale[1].checked) {
        wholesaleError.innerHTML = 'Ketersediaan pembelian grosir produk harus diisi';
        alert("Ketersediaan pembelian grosir produk harus diisi");
        return false;
    }

    return true;
}

function validateWholesalePrice() {
    wholesalePrice = document.forms['formProduk']['product-wholesale-price'];
    wholesalePriceError = document.getElementById('error-wholesale-price');

    wholesalePriceError.innerHTML = '';

    if (wholesalePrice.value.length === 0 && wholesalePrice.disabled === false) {
        wholesalePriceError.innerHTML = 'Harga grosir produk harus diisi';
        alert("Harga grosir produk harus diisi");
        return false;
    }

    return true;
}

function validateCheckBoxes() {
    checkboxes = document.forms['formProduk']['product-expedition'];
    checkedCount = 0;
    checkboxError = document.getElementById('error-expedition');

    checkboxError.innerHTML = '';

    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedCount++;
        }
    }

    if (checkedCount >= 3) {
        return true;
    } else {
        checkboxError.innerHTML = 'Pilih minimal 3 (tiga) ekspedisi';
        alert("Pilih minimal 3 (tiga) ekspedisi");
        return false;
    }
}

function validateForm() {
    isProductNameValid = validateName();
    isProductDescValid = validateDesc();
    isCategoryValid = validateCategory();
    isSubCategoryValid = validateSubCategory();
    isUnitPriceValid = validateUnitPrice();
    isWholesaleValid = validateWholesale();
    isWholesalePriceValid = validateWholesalePrice();
    isExpeditionValid = validateCheckBoxes();
    isCaptchaValid = checkCaptcha();

    return (
        isProductNameValid &&
        isProductDescValid &&
        isCategoryValid &&
        isSubCategoryValid &&
        isUnitPriceValid &&
        isWholesaleValid &&
        isWholesalePriceValid &&
        isExpeditionValid &&
        isCaptchaValid
    );
}
