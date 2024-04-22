import { Data } from "../models/data.model";
import { asyncHandler } from "../utils/asyncHandler";



// Initialize counts
let addCount = 0;
let updateCount = 0;


// API endpoint to add data
const addData = asyncHandler(
    async (req, res) => {
        try {
            const { fullName, Description } = req.body;
            const newData = new Data({ fullName, Description });
            await newData.save();
            addCount++; // Increment add count
            res.json({ message: 'Data added successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
)




// API endpoint to update data

const updateData = asyncHandler (
    async (req, res) => {
        try {
            const id = req.params.id;
            const { fullName, Description } = req.body;
            await Data.findByIdAndUpdate(id, { fullName, Description });
            updateCount++; // Increment update count
            res.json({ message: 'Data updated successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
)




// API endpoint to get counts

const getCounts = asyncHandler( async (req, res) => {
        res.json({ addCount, updateCount });
    }
)

export {
    addData,
    updateData,
    getCounts
}

