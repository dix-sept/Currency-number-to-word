function convert() {
    const value = document.getElementById('value').value;
    const result = document.getElementById('result');

    // Convert the number to Khmer words (this is a simple placeholder function)
    const khmerWords = numberToKhmerWords(value);

    result.innerText = `$ ${khmerWords}`;
}

function numberToKhmerWords(number) {
    // Placeholder function: implement the logic to convert number to Khmer words
    // Here you need to add your logic to convert numbers to Khmer words.
    // You can use a library or custom logic for this purpose.
    
    // Example simple conversion
    const khmerNumbers = ['សូន្យ', 'មួយ', 'ពីរ', 'បី', 'បួន', 'ប្រាំ', 'ប្រាំមួយ', 'ប្រាំពីរ', 'ប្រាំបី', 'ប្រាំបួន'];
    if (number < 10) {
    return khmerNumbers[number] || number;
    } else {
        return  "លាណ្យ";
}
}
