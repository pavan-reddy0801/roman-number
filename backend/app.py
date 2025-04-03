from flask import Flask, jsonify, request
from flask_cors import CORS
import logging

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

def to_roman(num):
    if not isinstance(num, int) or num < 1 or num > 3999:
        raise ValueError("Number must be between 1 and 3999")
    
    roman_symbols = [
        ('M', 1000), ('CM', 900), ('D', 500), ('CD', 400),
        ('C', 100), ('XC', 90), ('L', 50), ('XL', 40),
        ('X', 10), ('IX', 9), ('V', 5), ('IV', 4), ('I', 1)
    ]
    
    result = ''
    for symbol, value in roman_symbols:
        while num >= value:
            result += symbol
            num -= value
    return result

@app.route('/romannumeral')
def convert_to_roman():
    try:
        query = request.args.get('query', type=int)
        if not query:
            logger.error("No query parameter provided")
            return "Query parameter is required", 400

        result = to_roman(query)
        logger.info(f"Converted {query} to {result}")
        
        return jsonify({
            "input": str(query),
            "output": result
        })
        
    except ValueError as e:
        logger.error(f"Invalid input: {str(e)}")
        return str(e), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
