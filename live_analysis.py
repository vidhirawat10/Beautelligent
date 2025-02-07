import cv2
import time

# Load pre-trained Haar Cascade for face detection
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml') # type: ignore

# Initialize the camera feed
cap = cv2.VideoCapture(0)  # 0 selects the default camera

# Parameters for automatic capture
num_images_to_capture = 4
captured_images = 0
capture_interval = 2  # Interval in seconds between captures
start_time = time.time()

while True:
    # Read a frame from the camera
    ret, frame = cap.read()
    if not ret:
        print("Failed to capture frame")
        break

    # Convert to grayscale for face detection
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect faces in the frame
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(100, 100))

    for (x, y, w, h) in faces:
        # Draw a rectangle around the detected face (similar to the scanner effect)
        color = (255, 255, 255)  # White color for the rectangle border
        thickness = 2
        cv2.rectangle(frame, (x, y), (x + w, y + h), color, thickness)

        # Optional: Add a grid or line effect within the bounding box
        # Vertical line in the center
        cv2.line(frame, (x + w // 2, y), (x + w // 2, y + h), color, 1)
        # Horizontal line in the center
        cv2.line(frame, (x, y + h // 2), (x + w, y + h // 2), color, 1)

    # Display the frame with the face bounding box and scanning effect
    cv2.imshow("Face Detection with Scanning Effect", frame)

    # Check if it's time to capture another image
    if len(faces) > 0 and time.time() - start_time >= capture_interval:
        # Save the captured frame as an image
        image_path = f"captured_image_{captured_images + 1}.jpg"
        cv2.imwrite(image_path, frame)
        print(f"Image {captured_images + 1} captured and saved as {image_path}")
        
        # Increment the counter
        captured_images += 1
        start_time = time.time()  # Reset the start time

        # Check if we have captured the required number of images
        if captured_images >= num_images_to_capture:
            print("Captured all required images")
            break

    # Press 'q' to exit the live feed manually
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the camera and close any OpenCV windows
cap.release()
cv2.destroyAllWindows()
