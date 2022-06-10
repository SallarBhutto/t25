
const data = require("../dummyData.json");
/**
 * Get all users.
 * 
 * @returns 
 */
function getAll(): Promise<[]> {
    return data;
}


// Export default
export default {
    getAll,
} as const;
