const caractere = `;`;

console.log(`
${caractere === 'A' || caractere === 'E' || caractere === 'I' || caractere === 'O' || caractere === 'U' ? 'Vogal maiúscula' :
        caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u' ? 'Vogal Minuscula' :
            caractere === '1' || caractere === '2' || caractere === '3' || caractere === '4' || caractere === '5' || caractere === '6' || caractere === '7' || caractere === '8' || caractere === '9' || caractere === '0' ? 'Número' :
                'Qualquer letra que não seja uma vogal ou Numero'
    }
`);

// console.log(`
// ${!isNaN(caractere) ? caractere + ' é Número' :
//         caractere === caractere.toUpperCase() ? caractere + ' é letra Maiúscula' :
//             caractere === caractere.toLowerCase() ? caractere + ' é letra Minúscula' :
//                 'Qualquer letra que não seja uma vogal ou Simbolo'
//     }
// `);