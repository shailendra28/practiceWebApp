function grade(result, callback) {
    setTimeout(() => {
        // script to download the result here
        console.log(`Downloading ${result} ...`);
        // process the sheet once it is completed
        callback(result);
    }, 3000);
}

const result1 = 'https://www.maharashtraUniversity.net/sheet1.pdf';
const result2 = 'https://www.maharashtraUniversity.net/sheet2.pdf';
const result3 = 'https://www.maharashtraUniversity.net/sheet3.pdf';

grade(result1,function(sheet){
    console.log(`Processing ${sheet}`);
    // download the second sheet
    grade(result2,function(sheet){
        console.log(`Processing ${sheet}`);
        // download the third sheet
        grade(result3,function(sheet){
            console.log(`Processing ${sheet}`);
        });
    });
});