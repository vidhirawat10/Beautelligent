import numpy as np
import tensorflow as tf # type: ignore
from tensorflow.keras.preprocessing import image # type: ignore
from tensorflow.keras.models import load_model # type: ignore
import matplotlib.pyplot as plt # type: ignore

# Model Loading
dark_circle_model = load_model('dark_detector.h5')  

# Image preprocessing
def predict_dark_circle_condition(img_path):
   
    img = image.load_img(img_path, target_size=(128 , 128)) 
    img_array = image.img_to_array(img)  #
    img_array = np.expand_dims(img_array, axis=0)  
    img_array = img_array / 255.0  

    # Make a prediction
    prediction = dark_circle_model.predict(img_array)
    
    # Map the prediction to "No Dark Circles" or "Dark Circles Present"
    if prediction[0] > 0.5:
        result = 'Dark Circles Present'
    else:
        result = 'No Dark Circles'

    # Display the image and prediction
    plt.imshow(img)
    plt.axis('off')
    plt.title(f"Prediction: {result}")
    plt.show()

    return result

# Test the function with an image path
dark_circle_img_path = r'C:\Users\Acer\Desktop\Beautelligent\testd.png' 
dark_circle_condition = predict_dark_circle_condition(dark_circle_img_path)
print(f"The predicted dark circle condition is: {dark_circle_condition}")
