const FREE_MONTHS_PER_YEAR = 2;

export const getFreeMonthsPerYear = () => {
    return FREE_MONTHS_PER_YEAR;
}

export const plansData = [
    {id: 1, name: 'Arcade', imgName: 'icon-arcade.svg', perMonth: 9},
    {id: 2, name: 'Advanced', imgName: 'icon-advanced.svg', perMonth: 12},
    {id: 3, name: 'Pro', imgName: 'icon-pro.svg', perMonth: 15}
];

export const addOns = [
    {id: 1, name: 'Online service', desc: 'Access to multiplayer games', perMonth: 1},
    {id: 2, name: 'Larger storage', desc: 'Extra 1TB of cloud save', perMonth: 2},
    {id: 3, name: 'Customizable profile', desc: 'Custom theme on your profile', perMonth: 2}
];

export const getPlanById = (id) => {
    const plan = plansData.find(it => it.id === id);
    return plan;
}

export const getAddOnById = (id) => {
    return addOns.find(it => it.id === id);
}

export const getSelectedAddOnsByIds = (array) => {
    if (!array || !Array.isArray(array) || !array.length) {
        return [];
    }
    return addOns.filter(it => array.includes(it.id));
}

export const getItemPrice = (perMonth, isMonthly) => {
    return isMonthly ? `$${perMonth}/mo` : `$${perMonth * (12 - FREE_MONTHS_PER_YEAR)}/yr`;
}