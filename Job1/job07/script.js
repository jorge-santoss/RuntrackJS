function jourTravaille(date) {
    const jourFeries = [
        '2024-01-01', '2024-04-01', '2024-05-01', '2024-05-08', '2024-05-09',
        '2024-05-20', '2024-07-14', '2024-08-15', '2024-11-01', '2024-11-11', '2024-12-25'
    ];
    
    const day = date.getDate();
    const month = date.getMonth() + 1; // Les mois sont indexés à partir de 0
    const year = date.getFullYear();
    const dayOfWeek = date.getDay();
    
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    if (jourFeries.includes(formattedDate)) {
        console.log(`Le ${day} / ${month} / ${year} est un jour férié`);
    } else if (dayOfWeek === 0 || dayOfWeek === 6) {
        console.log(`Non, ${day} / ${month} / ${year} est un week-end`);
    } else {
        console.log(`Oui, ${day} / ${month} / ${year} est un jour travaillé`);
    }
}

// Inserez la Date :
const date = new Date('2024-11-11');
jourTravaille(date);
