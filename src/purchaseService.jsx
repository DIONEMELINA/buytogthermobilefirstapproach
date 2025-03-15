import api from "./api";

export async function CreateGoal({ title: title, description: description, target_amount: target_amount, product_name: product_name, product_description: product_description, product_unit_price: product_unit_price, product_bulk_price: product_bulk_price, product_quantity: product_quantity, group_link: group_link, start_date: start_date, end_date: end_date, product_image: product_image }) {
    try {
        const body = new FormData();
        body.append('title', title);
        body.append('description', description)
        body.append('target_amount', target_amount);
        body.append('product_name', product_name);
        body.append('product_description', product_description);
        body.append('product_unit_price', product_unit_price);
        body.append('product_bulk_price', product_bulk_price);
        body.append('product_quantity', product_quantity);
        body.append('group_link', group_link);
        body.append('start_date', start_date);
        body.append('end_date', end_date);
        body.append('product_image', product_image);

        const response = await api.post("/api/purchase-goals", body);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error("Goal creation failed", error.response?.data || error.message);
        throw error
    }
}
export async function ListOfGroup () {
        try {
            const response = await api.get('/api/purchase-goals');
            const groups = response.data.data
            localStorage.setItem('groupList', JSON.stringify(groups))

        } catch (error) {
            console.error('login failed', error.response?.data || error.message);
            throw error;
        }
        
    }



export  function getStoredGroups() {
    const Groups = localStorage.getItem('groupList');
    try {
        return Groups ? JSON.parse(Groups) : [];
    } catch (error) {
        console.log(error);
        return [];
    }
}