# Video tracking using OpenCV for object detection and tracking

import cv2

def video_tracking(video_path, output_path=None):
    """
    Tracks objects in a video and optionally saves the output video.
    
    Args:
        video_path (str): Path to the input video file.
        output_path (str, optional): Path to save the processed video. Defaults to None.
    """
    # Open video file
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error: Cannot open video file {video_path}")
        return

    # Define tracker
    tracker = cv2.TrackerCSRT_create()

    # Read the first frame
    ret, frame = cap.read()
    if not ret:
        print("Error: Cannot read the first frame.")
        return

    # Allow user to select a bounding box
    bbox = cv2.selectROI("Select Object", frame, fromCenter=False, showCrosshair=True)
    cv2.destroyWindow("Select Object")

    # Initialize the tracker with the bounding box
    tracker.init(frame, bbox)

    # Set up video writer if saving output
    writer = None
    if output_path:
        fourcc = cv2.VideoWriter_fourcc(*"mp4v")
        fps = int(cap.get(cv2.CAP_PROP_FPS))
        frame_size = (int(cap.get(cv2.CAP_PROP_FRAME_WIDTH)), int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT)))
        writer = cv2.VideoWriter(output_path, fourcc, fps, frame_size)

    while True:
        # Read the next frame
        ret, frame = cap.read()
        if not ret:
            break

        # Update tracker
        success, bbox = tracker.update(frame)

        if success:
            # Draw bounding box
            p1 = (int(bbox[0]), int(bbox[1]))
            p2 = (int(bbox[0] + bbox[2]), int(bbox[1] + bbox[3]))
            cv2.rectangle(frame, p1, p2, (255, 0, 0), 2)
        else:
            # Show failure message
            cv2.putText(frame, "Tracking failure", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 0, 255), 2)

        # Display the frame
        cv2.imshow("Video Tracking", frame)

        # Save the frame if output path is provided
        if writer:
            writer.write(frame)

        # Exit on pressing 'q'
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release resources
    cap.release()
    if writer:
        writer.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    video_path = "path/to/your/video.mp4"  # Replace with your video file path
    output_path = "path/to/save/output.mp4"  # Optional: Replace with your output file path
    video_tracking(video_path, output_path)
