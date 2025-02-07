import numpy as np # type: ignore
import tensorflow as tf # type: ignore
from tensorflow.keras.preprocessing import image # type: ignore
from tensorflow.keras.models import load_model # type: ignore
import matplotlib.pyplot as plt # type: ignore

# Model Loading
acne_model = load_model('acne_detector_mobilenetv2.h5')

# Image Preprocessing
def predict_acne_condition(img_path):
    
    img = image.load_img(img_path, target_size=(224,224))  
    img_array = image.img_to_array(img)  
    img_array = np.expand_dims(img_array, axis=0)  
    img_array = img_array / 255.0  

   
    prediction = acne_model.predict(img_array)
    
    
    if prediction[0] > 0.5:
        result = 'Acne Present'
    else:
        result = 'No Acne'

    # Display the image and prediction
    plt.imshow(img)
    plt.axis('off')
    plt.title(f"Prediction: {result}")
    plt.show()

    return result


acne_img_path = r'C:\Users\Acer\Desktop\Beautelligent\captured_image_3.jpg'  
acne_condition = predict_acne_condition(acne_img_path)
print(f"The predicted acne condition is: {acne_condition}")
