import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';

import styles from './Qrscan.module.css';

const Qrscan = () => {

	const [result, setResult] = useState('No result');

	const handleError = (err) => {
		console.err(err)
	}

	const handleScan = (result) => {
		if(result){
			setResult(result)
		}
	}

	const previewStyle = {
		height: "240px",
		width: "320px",
	}

	return (
		<div style={styles.container}>
			<QrReader
			// scanDelay={500}
			style={previewStyle}
			// onError={handleError}
			// onScan={handleScan}
            onResult={(result, error) => {
                if (!!result) {
                    setResult(result?.text);
                }
      
                if (!!error) {
                  console.error(error);
                }
              }}            
			/>
			<div style={styles.result}>{result}</div>		
		</div>
	);
}

export default Qrscan;