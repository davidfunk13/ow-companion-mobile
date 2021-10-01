import * as yup from "yup";

const validationSchema = yup.object().shape({ battletag: yup.string().required("Input is required."), });

export default validationSchema; 
