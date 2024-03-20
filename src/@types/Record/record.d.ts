import { Images } from "../Images/images";
import { Address } from "../Address/address";
import { Types } from 'mongoose';

export type Record = {
    $numberDecimal: any;
    id: string;
    name: string;
    images: Images;
    summary: string;
    address: Address;
    price: {$numberDecimal: number}
};
