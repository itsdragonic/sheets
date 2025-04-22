function accounting(doc, createText, date, sheet) {
    doc.setFont(undefined, 'bold');
			
    createText("Capri Sun", "B2");
    createText("Choco. Milk", "C2");
    createText("White Milk", "D2");
    createText("Coke", "E2");
    createText("Dr. Pepper", "F2");
    createText("Sprite", "G2");
    createText("2 Cheese Plate", "H2");
    createText("3 Cheese Plate", "I2");
    createText("2 Pepp. Plate", "J2");
    createText("3 Pepp. Plate", "K2");

    doc.setFont(undefined, 'normal');

    createText(String(date), "A1");
    createText("KA", "A3");
    createText("KB", "A4");
    createText("1A", "A7");
    createText("1B", "A8");
    createText("2A", "A9");
    createText("2B", "A10");
    createText("3A", "A13");
    createText("3B", "A14");
    createText("4A", "A15");
    createText("4B", "A16");
    createText("5A", "A19");
    createText("5B", "A20");
    createText("6A", "A21");
    createText("6B", "A22");
    createText("7A", "A25");
    createText("7B", "A26");
    createText("8A", "A27");
    createText("8B", "A28");
    
    // tallying

    let KA = [
        countMatches('KA', 'Capri Sun'),
        countMatches('KA', 'Chocolate Milk'),
        countMatches('KA', 'White Milk'),
        countMatches('KA', 'Cheese', ' 2 '),
        countMatches('KA', 'Cheese', ' 3 '),
        countMatches('KA', 'Pepperoni', ' 2 '),
        countMatches('KA', 'Pepperoni', ' 3 '),
    ];
    
    createText(String(KA[0]), 'B3');
    createText(String(KA[1]), 'C3');
    createText(String(KA[2]), 'D3');
    createText(String(KA[3]), 'H3');
    createText(String(KA[4]), 'I3');
    createText(String(KA[5]), 'J3');
    createText(String(KA[6]), 'K3');

    let KB = [
        countMatches('KB', 'Capri Sun'),
        countMatches('KB', 'Chocolate Milk'),
        countMatches('KB', 'White Milk'),
        countMatches('KB', 'Cheese', ' 2 '),
        countMatches('KB', 'Cheese', ' 3 '),
        countMatches('KB', 'Pepperoni', ' 2 '),
        countMatches('KB', 'Pepperoni', ' 3 '),
    ];
    
    createText(String(KB[0]), 'B4');
    createText(String(KB[1]), 'C4');
    createText(String(KB[2]), 'D4');
    createText(String(KB[3]), 'H4');
    createText(String(KB[4]), 'I4');
    createText(String(KB[5]), 'J4');
    createText(String(KB[6]), 'K4');

    doc.setFont(undefined, 'bold');
    createText(String(KA[3] + KB[3]), "H5");
    createText(String(KA[4] + KB[4]), "I5");
    createText(String(KA[5] + KB[5]), "J5");
    createText(String(KA[6] + KB[6]), "K5");
    doc.setFont(undefined, 'normal');

    let _1A = [
        countMatches('1A','Capri Sun'),
        countMatches('1A','Chocolate Milk'),
        countMatches('1A','White Milk'),
        countMatches('1A','Cheese',' 2 '),
        countMatches('1A','Cheese',' 3 '),
        countMatches('1A','Pepperoni',' 2 '),
        countMatches('1A','Pepperoni',' 3 ')
    ];
    createText(String(_1A[0]),'B7');
    createText(String(_1A[1]),'C7');
    createText(String(_1A[2]),'D7');
    createText(String(_1A[3]),'H7');
    createText(String(_1A[4]),'I7');
    createText(String(_1A[5]),'J7');
    createText(String(_1A[6]),'K7');
    
    let _1B = [
        countMatches('1B','Capri Sun'),
        countMatches('1B','Chocolate Milk'),
        countMatches('1B','White Milk'),
        countMatches('1B','Cheese',' 2 '),
        countMatches('1B','Cheese',' 3 '),
        countMatches('1B','Pepperoni',' 2 '),
        countMatches('1B','Pepperoni',' 3 ')
    ];
    createText(String(_1B[0]),'B8');
    createText(String(_1B[1]),'C8');
    createText(String(_1B[2]),'D8');
    createText(String(_1B[3]),'H8');
    createText(String(_1B[4]),'I8');
    createText(String(_1B[5]),'J8');
    createText(String(_1B[6]),'K8');
    
    let _2A = [
        countMatches('2A','Capri Sun'),
        countMatches('2A','Chocolate Milk'),
        countMatches('2A','White Milk'),
        countMatches('2A','Cheese',' 2 '),
        countMatches('2A','Cheese',' 3 '),
        countMatches('2A','Pepperoni',' 2 '),
        countMatches('2A','Pepperoni',' 3 ')
    ];
    createText(String(_2A[0]),'B9');
    createText(String(_2A[1]),'C9');
    createText(String(_2A[2]),'D9');
    createText(String(_2A[3]),'H9');
    createText(String(_2A[4]),'I9');
    createText(String(_2A[5]),'J9');
    createText(String(_2A[6]),'K9');
    
    let _2B = [
        countMatches('2B','Capri Sun'),
        countMatches('2B','Chocolate Milk'),
        countMatches('2B','White Milk'),
        countMatches('2B','Cheese',' 2 '),
        countMatches('2B','Cheese',' 3 '),
        countMatches('2B','Pepperoni',' 2 '),
        countMatches('2B','Pepperoni',' 3 ')
    ];
    createText(String(_2B[0]),'B10');
    createText(String(_2B[1]),'C10');
    createText(String(_2B[2]),'D10');
    createText(String(_2B[3]),'H10');
    createText(String(_2B[4]),'I10');
    createText(String(_2B[5]),'J10');
    createText(String(_2B[6]),'K10');
    
    doc.setFont(undefined,'bold');
    createText(String(_1A[3] + _1B[3] + _2A[3] + _2B[3]),'H11');
    createText(String(_1A[4] + _1B[4] + _2A[4] + _2B[4]),'I11');
    createText(String(_1A[5] + _1B[5] + _2A[5] + _2B[5]),'J11');
    createText(String(_1A[6] + _1B[6] + _2A[6] + _2B[6]),'K11');
    doc.setFont(undefined,'normal');

    let _3A = [
        countMatches(' 3A ','Capri Sun'),
        countMatches(' 3A ','Chocolate Milk'),
        countMatches(' 3A ','White Milk'),
        countMatches(' 3A ','Cheese',' 2 '),
        countMatches(' 3A ','Cheese',' 3 '),
        countMatches(' 3A ','Pepperoni',' 2 '),
        countMatches(' 3A ','Pepperoni',' 3 ')
    ];
    createText(String(_3A[0]), 'B13');
    createText(String(_3A[1]), 'C13');
    createText(String(_3A[2]), 'D13');
    createText(String(_3A[3]), 'H13');
    createText(String(_3A[4]), 'I13');
    createText(String(_3A[5]), 'J13');
    createText(String(_3A[6]), 'K13');
    
    let _3B = [
        countMatches(' 3B ','Capri Sun'),
        countMatches(' 3B ','Chocolate Milk'),
        countMatches(' 3B ','White Milk'),
        countMatches(' 3B ','Cheese',' 2 '),
        countMatches(' 3B ','Cheese',' 3 '),
        countMatches(' 3B ','Pepperoni',' 2 '),
        countMatches(' 3B ','Pepperoni',' 3 ')
    ];
    createText(String(_3B[0]), 'B14');
    createText(String(_3B[1]), 'C14');
    createText(String(_3B[2]), 'D14');
    createText(String(_3B[3]), 'H14');
    createText(String(_3B[4]), 'I14');
    createText(String(_3B[5]), 'J14');
    createText(String(_3B[6]), 'K14');
    
    let _4A = [
        countMatches(' 4A ','Capri Sun'),
        countMatches(' 4A ','Chocolate Milk'),
        countMatches(' 4A ','White Milk'),
        countMatches(' 4A ','Cheese',' 2 '),
        countMatches(' 4A ','Cheese',' 3 '),
        countMatches(' 4A ','Pepperoni',' 2 '),
        countMatches(' 4A ','Pepperoni',' 3 ')
    ];
    createText(String(_4A[0]), 'B15');
    createText(String(_4A[1]), 'C15');
    createText(String(_4A[2]), 'D15');
    createText(String(_4A[3]), 'H15');
    createText(String(_4A[4]), 'I15');
    createText(String(_4A[5]), 'J15');
    createText(String(_4A[6]), 'K15');
    
    let _4B = [
        countMatches(' 4B ','Capri Sun'),
        countMatches(' 4B ','Chocolate Milk'),
        countMatches(' 4B ','White Milk'),
        countMatches(' 4B ','Cheese',' 2 '),
        countMatches(' 4B ','Cheese',' 3 '),
        countMatches(' 4B ','Pepperoni',' 2 '),
        countMatches(' 4B ','Pepperoni',' 3 ')
    ];
    createText(String(_4B[0]), 'B16');
    createText(String(_4B[1]), 'C16');
    createText(String(_4B[2]), 'D16');
    createText(String(_4B[3]), 'H16');
    createText(String(_4B[4]), 'I16');
    createText(String(_4B[5]), 'J16');
    createText(String(_4B[6]), 'K16');
    
    doc.setFont(undefined,'bold');
    createText(String(_3A[3] + _3B[3] + _4A[3] + _4B[3]), 'H17');
    createText(String(_3A[4] + _3B[4] + _4A[4] + _4B[4]), 'I17');
    createText(String(_3A[5] + _3B[5] + _4A[5] + _4B[5]), 'J17');
    createText(String(_3A[6] + _3B[6] + _4A[6] + _4B[6]), 'K17');
    doc.setFont(undefined,'normal');
    
    let _5A = [
        countMatches('5A','Capri Sun'),
        countMatches('5A','Chocolate Milk'),
        countMatches('5A','White Milk'),
        countMatches('5A','Coke'),
        countMatches('5A','Dr. Pepper'),
        countMatches('5A','Sprite'),
        countMatches('5A','Cheese',' 2 '),
        countMatches('5A','Cheese',' 3 '),
        countMatches('5A','Pepperoni',' 2 '),
        countMatches('5A','Pepperoni',' 3 ')
    ];
    createText(String(_5A[0]), 'B19');
    createText(String(_5A[1]), 'C19');
    createText(String(_5A[2]), 'D19');
    createText(String(_5A[3]), 'E19');
    createText(String(_5A[4]), 'F19');
    createText(String(_5A[5]), 'G19');
    createText(String(_5A[6]), 'H19');
    createText(String(_5A[7]), 'I19');
    createText(String(_5A[8]), 'J19');
    createText(String(_5A[9]), 'K19');
    
    let _5B = [
        countMatches('5B','Capri Sun'),
        countMatches('5B','Chocolate Milk'),
        countMatches('5B','White Milk'),
        countMatches('5B','Coke'),
        countMatches('5B','Dr. Pepper'),
        countMatches('5B','Sprite'),
        countMatches('5B','Cheese',' 2 '),
        countMatches('5B','Cheese',' 3 '),
        countMatches('5B','Pepperoni',' 2 '),
        countMatches('5B','Pepperoni',' 3 ')
    ];
    createText(String(_5B[0]), 'B20');
    createText(String(_5B[1]), 'C20');
    createText(String(_5B[2]), 'D20');
    createText(String(_5B[3]), 'E20');
    createText(String(_5B[4]), 'F20');
    createText(String(_5B[5]), 'G20');
    createText(String(_5B[6]), 'H20');
    createText(String(_5B[7]), 'I20');
    createText(String(_5B[8]), 'J20');
    createText(String(_5B[9]), 'K20');
    
    let _6A = [
        countMatches('6A','Capri Sun'),
        countMatches('6A','Chocolate Milk'),
        countMatches('6A','White Milk'),
        countMatches('6A','Coke'),
        countMatches('6A','Dr. Pepper'),
        countMatches('6A','Sprite'),
        countMatches('6A','Cheese',' 2 '),
        countMatches('6A','Cheese',' 3 '),
        countMatches('6A','Pepperoni',' 2 '),
        countMatches('6A','Pepperoni',' 3 ')
    ];
    createText(String(_6A[0]), 'B21');
    createText(String(_6A[1]), 'C21');
    createText(String(_6A[2]), 'D21');
    createText(String(_6A[3]), 'E21');
    createText(String(_6A[4]), 'F21');
    createText(String(_6A[5]), 'G21');
    createText(String(_6A[6]), 'H21');
    createText(String(_6A[7]), 'I21');
    createText(String(_6A[8]), 'J21');
    createText(String(_6A[9]), 'K21');
    
    let _6B = [
        countMatches('6B','Capri Sun'),
        countMatches('6B','Chocolate Milk'),
        countMatches('6B','White Milk'),
        countMatches('6B','Coke'),
        countMatches('6B','Dr. Pepper'),
        countMatches('6B','Sprite'),
        countMatches('6B','Cheese',' 2 '),
        countMatches('6B','Cheese',' 3 '),
        countMatches('6B','Pepperoni',' 2 '),
        countMatches('6B','Pepperoni',' 3 ')
    ];
    createText(String(_6B[0]), 'B22');
    createText(String(_6B[1]), 'C22');
    createText(String(_6B[2]), 'D22');
    createText(String(_6B[3]), 'E22');
    createText(String(_6B[4]), 'F22');
    createText(String(_6B[5]), 'G22');
    createText(String(_6B[6]), 'H22');
    createText(String(_6B[7]), 'I22');
    createText(String(_6B[8]), 'J22');
    createText(String(_6B[9]), 'K22');
    
    doc.setFont(undefined,'bold');
    createText(String(_5A[6] + _5B[6] + _6A[6] + _6B[6]), 'H23');
    createText(String(_5A[7] + _5B[7] + _6A[7] + _6B[7]), 'I23');
    createText(String(_5A[8] + _5B[8] + _6A[8] + _6B[8]), 'J23');
    createText(String(_5A[9] + _5B[9] + _6A[9] + _6B[9]), 'K23');
    doc.setFont(undefined,'normal');
    
    let _7A = [
        countMatches('7A','Capri Sun'),
        countMatches('7A','Chocolate Milk'),
        countMatches('7A','White Milk'),
        countMatches('7A','Coke'),
        countMatches('7A','Dr. Pepper'),
        countMatches('7A','Sprite'),
        countMatches('7A','Cheese',' 2 '),
        countMatches('7A','Cheese',' 3 '),
        countMatches('7A','Pepperoni',' 2 '),
        countMatches('7A','Pepperoni',' 3 ')
    ];
    createText(String(_7A[0]), 'B25');
    createText(String(_7A[1]), 'C25');
    createText(String(_7A[2]), 'D25');
    createText(String(_7A[3]), 'E25');
    createText(String(_7A[4]), 'F25');
    createText(String(_7A[5]), 'G25');
    createText(String(_7A[6]), 'H25');
    createText(String(_7A[7]), 'I25');
    createText(String(_7A[8]), 'J25');
    createText(String(_7A[9]), 'K25');
    
    let _7B = [
        countMatches('7B','Capri Sun'),
        countMatches('7B','Chocolate Milk'),
        countMatches('7B','White Milk'),
        countMatches('7B','Coke'),
        countMatches('7B','Dr. Pepper'),
        countMatches('7B','Sprite'),
        countMatches('7B','Cheese',' 2 '),
        countMatches('7B','Cheese',' 3 '),
        countMatches('7B','Pepperoni',' 2 '),
        countMatches('7B','Pepperoni',' 3 ')
    ];
    createText(String(_7B[0]), 'B26');
    createText(String(_7B[1]), 'C26');
    createText(String(_7B[2]), 'D26');
    createText(String(_7B[3]), 'E26');
    createText(String(_7B[4]), 'F26');
    createText(String(_7B[5]), 'G26');
    createText(String(_7B[6]), 'H26');
    createText(String(_7B[7]), 'I26');
    createText(String(_7B[8]), 'J26');
    createText(String(_7B[9]), 'K26');
    
    let _8A = [
        countMatches('8A','Capri Sun'),
        countMatches('8A','Chocolate Milk'),
        countMatches('8A','White Milk'),
        countMatches('8A','Coke'),
        countMatches('8A','Dr. Pepper'),
        countMatches('8A','Sprite'),
        countMatches('8A','Cheese',' 2 '),
        countMatches('8A','Cheese',' 3 '),
        countMatches('8A','Pepperoni',' 2 '),
        countMatches('8A','Pepperoni',' 3 ')
    ];
    createText(String(_8A[0]), 'B27');
    createText(String(_8A[1]), 'C27');
    createText(String(_8A[2]), 'D27');
    createText(String(_8A[3]), 'E27');
    createText(String(_8A[4]), 'F27');
    createText(String(_8A[5]), 'G27');
    createText(String(_8A[6]), 'H27');
    createText(String(_8A[7]), 'I27');
    createText(String(_8A[8]), 'J27');
    createText(String(_8A[8]), 'K27');
    
    let _8B = [
        countMatches('8B','Capri Sun'),
        countMatches('8B','Chocolate Milk'),
        countMatches('8B','White Milk'),
        countMatches('8B','Coke'),
        countMatches('8B','Dr. Pepper'),
        countMatches('8B','Sprite'),
        countMatches('8B','Cheese',' 2 '),
        countMatches('8B','Cheese',' 3 '),
        countMatches('8B','Pepperoni',' 2 '),
        countMatches('8B','Pepperoni',' 3 ')
    ];
    createText(String(_8B[0]), 'B28');
    createText(String(_8B[1]), 'C28');
    createText(String(_8B[2]), 'D28');
    createText(String(_8B[3]), 'E28');
    createText(String(_8B[4]), 'F28');
    createText(String(_8B[5]), 'G28');
    createText(String(_8B[6]), 'H28');
    createText(String(_8B[7]), 'I28');
    createText(String(_8B[8]), 'J28');
    createText(String(_8B[9]), 'K28');
    
    doc.setFont(undefined,'bold');
    createText(String(_7A[6] + _7B[6] + _8A[6] + _8B[6]), 'H29');
    createText(String(_7A[7] + _7B[7] + _8A[7] + _8B[7]), 'I29');
    createText(String(_7A[8] + _7B[8] + _8A[8] + _8B[8]), 'J29');
    createText(String(_7A[9] + _7B[9] + _8A[9] + _8B[9]), 'K29');

    // final total
    function totals(index, sodas) {
        let total;

        if (sodas) {
            total = [
                _5A, _5B,
                _6A, _6B,
                _7A, _7B,
                _8A, _8B
            ].reduce((sum, cls) => sum + cls[index], 0);
        } else {
            total = [
                KA, KB,
                _1A, _1B,
                _2A, _2B,
                _3A, _3B,
                _4A, _4B,
                _5A, _5B,
                _6A, _6B,
                _7A, _7B,
                _8A, _8B
            ].reduce((sum, cls) => sum + cls[index], 0);
        }
        
        return total;
    }
    
    createText(String(totals(0, false)), 'B29');
    createText(String(totals(1, false)), 'C29');
    createText(String(totals(2, false)), 'D29');
    createText(String(totals(3, true)), 'E29');
    createText(String(totals(4, true)), 'F29');
    createText(String(totals(5, true)), 'G29');
    

    doc.setFont(undefined,'normal');    
}