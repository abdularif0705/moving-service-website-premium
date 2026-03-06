import os
from PIL import Image, ImageFilter

def process_logo(input_path, output_path):
    print(f"Processing logo from {input_path}")
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found.")
        return
        
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Check for white or near-white pixels (the bubble)
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0)) # transparent
            else:
                newData.append(item)

        img.putdata(newData)
        
        # Soften edges slightly
        # We can extract alpha channel, blur it slightly, and put it back to soften edges
        alpha = img.split()[3]
        alpha = alpha.filter(ImageFilter.GaussianBlur(radius=0.5))
        img.putalpha(alpha)
        
        img.save(output_path, "PNG")
        print(f"Processed logo saved to {output_path}")

        # Ensure we have an ICO version for the favicon
        # The favicon goes in public/favicon.ico usually in Next.js
        icon_size = (32, 32)
        favicon_img = img.resize(icon_size, Image.Resampling.LANCZOS)
        favicon_path = os.path.join(os.path.dirname(output_path), "favicon.ico")
        favicon_img.save(favicon_path, format="ICO", sizes=[(32, 32)])
        print(f"Favicon saved to {favicon_path}")
        
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    public_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public")
    input_logo = os.path.join(public_dir, "logo.png")
    output_logo = os.path.join(public_dir, "logo_transparent.png")
    
    process_logo(input_logo, output_logo)
