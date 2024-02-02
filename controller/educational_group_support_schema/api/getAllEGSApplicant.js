const EducationalGroupSupportModel = require("../../../modals/EducationalGroupSupportModel");

const getAllEGSApplicant = async (req , res) => {
    try {
        const applicantId = req.user._id ; 

        const allEGSApplicants = await EducationalGroupSupportModel.find(
            {
                'general_information.project_incharge.ref' :  applicantId,
            }
        ) ; 

        if(allEGSApplicants.length == 0){
            return res.status(404).json({
                success: false , 
                data: [], 
                message: 'No data found for the particular applicant',
            })
        }

        return res.status(200).json({
            success: true , 
            data: allEGSApplicants, 
            message: 'All data for the applicant',
        });

    } catch (error) {
        return res.status(400).json({
            success: false , 
            error: error , 
            message: 'Cannot find anything for the applicant'
        });
    }
};

module.exports = getAllEGSApplicant;