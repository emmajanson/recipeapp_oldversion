import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";
import React from "react";

function Home({ isLoading, mobileMode, windowLoad }) {
    return (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
            <Popular isLoading={isLoading} mobileMode={mobileMode} windowLoad={windowLoad} />
            <Veggie isLoading={isLoading} mobileMode={mobileMode} windowLoad={windowLoad} />
        </motion.div>
    );
}

export default Home;