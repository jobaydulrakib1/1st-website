# Script to extract and display metadata information about audio files

import os
from mutagen import File

def get_audio_metadata(file_path):
    """
    Extracts and returns metadata from an audio file.
    
    Args:
        file_path (str): Path to the audio file.
        
    Returns:
        dict: A dictionary containing audio metadata.
    """
    try:
        # Check if the file exists
        if not os.path.exists(file_path):
            raise FileNotFoundError(f"The file '{file_path}' does not exist.")
        
        # Extract metadata using Mutagen
        audio_file = File(file_path)
        if not audio_file:
            raise ValueError(f"The file '{file_path}' is not a valid audio file.")
        
        # Gather metadata information
        metadata = {
            "Filename": os.path.basename(file_path),
            "Duration (s)": round(audio_file.info.length, 2) if audio_file.info else "Unknown",
            "Bitrate (kbps)": audio_file.info.bitrate // 1000 if audio_file.info and audio_file.info.bitrate else "Unknown",
            "Sample Rate (Hz)": audio_file.info.sample_rate if audio_file.info else "Unknown",
            "Channels": audio_file.info.channels if audio_file.info else "Unknown",
        }
        
        return metadata
    except Exception as e:
        print(f"Error extracting audio metadata: {e}")
        return None


def print_audio_metadata(file_path):
    """
    Prints metadata of the given audio file.
    
    Args:
        file_path (str): Path to the audio file.
    """
    metadata = get_audio_metadata(file_path)
    if metadata:
        print("Audio Metadata:")
        for key, value in metadata.items():
            print(f"{key}: {value}")


# Example usage
if __name__ == "__main__":
    sample_audio_path = "/tmp/sample_audio.mp3"  # Replace with your audio file path
    print_audio_metadata(sample_audio_path)
