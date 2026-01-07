import { motion } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/249912200031`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:shadow-xl cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                stiffness: 260,
                damping: 20,
                delay: 0.3
            }}
            whileHover={{ scale: 1.1 }}
        >
            <FaWhatsapp size={32} color="white" />
        </motion.button>
    );
};

export default WhatsAppButton;
