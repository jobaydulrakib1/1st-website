# Script to generate videos using Blender Python API

import bpy

def generate_video(scene_name, output_file):
    """
    Generates a video using Blender's Python API.
    
    Args:
        scene_name (str): Name of the Blender scene to render.
        output_file (str): Path to save the generated video.
    """
    try:
        # Set the scene name
        if scene_name not in bpy.data.scenes:
            print(f"Scene '{scene_name}' does not exist.")
            return
        
        bpy.context.window.scene = bpy.data.scenes[scene_name]
        
        # Configure render settings
        bpy.context.scene.render.image_settings.file_format = 'FFMPEG'
        bpy.context.scene.render.ffmpeg.format = 'MPEG4'
        bpy.context.scene.render.ffmpeg.audio_codec = 'AAC'
        bpy.context.scene.render.filepath = output_file
        
        # Start rendering the video
        bpy.ops.render.render(animation=True)
        print(f"Video generated successfully and saved to: {output_file}")
    except Exception as e:
        print(f"Error generating video: {e}")

# Example usage
if __name__ == "__main__":
    generate_video("MainScene", "/output/generated_video.mp4")
