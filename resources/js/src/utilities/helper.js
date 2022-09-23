export const roleToShow = (role) => {
    switch (role) {
        case "journalist":
            return "gestionnaire";
        case "accounting":
            return "comptable";
        case "observer":
            return "consultant";
        case "admin":
            return "administrateur";
        default:
            return "utilisateur";
    }
};


export const getNumberPage = (tables = [], perPage = 10) => {
    const numberPage = tables.length / perPage;
    return Number(Math.ceil(numberPage).toFixed(0));
};

export const convertNewValue = (newValue) => {
    const date = new Date(newValue);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const newDate = `${year}-${month}-${day}`;
    const newDate2 = newDate.replace(/-/g, '/');
    return newDate2 ;
};
