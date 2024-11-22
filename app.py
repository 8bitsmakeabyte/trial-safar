import streamlit as st
import os
import base64
from pathlib import Path

# Function to read and render the HTML file
def render_html_file(html_path):
    with open(html_path, 'r') as f:
        html_content = f.read()
    return html_content

# Function to serve CSS as inline style
def serve_css(css_file_path):
    with open(css_file_path, 'r') as f:
        css_content = f.read()
    return f"<style>{css_content}</style>"

# Function to serve JS as inline script
def serve_js(js_file_path):
    with open(js_file_path, 'r') as f:
        js_content = f.read()
    return f"<script>{js_content}</script>"

# Function to serve images
def serve_image(image_file_path):
    # Read image file as binary
    with open(image_file_path, "rb") as image_file:
        img_data = base64.b64encode(image_file.read()).decode()
        return f'<img src="data:image/png;base64,{img_data}" alt="Image"/>'

# Main Streamlit app
def main():
    st.set_page_config(page_title="Registration and OTP", layout="centered")

    # Paths to the HTML, CSS, JS, and image files
    index_html_path = Path("index.html")
    otp_html_path = Path("otp.html")
    style_css_path = Path("style.css")
    otp_css_path = Path("otp.css")
    index_js_path = Path("index.js")
    otp_js_path = Path("otp.js")
    image_file_path = Path("reg-ill1.png")  # Update the image path if necessary

    # Render HTML content from index.html
    st.markdown(render_html_file(index_html_path), unsafe_allow_html=True)
    
    # Serve the corresponding CSS and JS for index.html
    st.markdown(serve_css(style_css_path), unsafe_allow_html=True)
    st.markdown(serve_js(index_js_path), unsafe_allow_html=True)
    
    # Serve the image for index.html
    st.markdown(serve_image(image_file_path), unsafe_allow_html=True)

    # Render OTP HTML content from otp.html
    st.markdown(render_html_file(otp_html_path), unsafe_allow_html=True)
    
    # Serve the corresponding OTP CSS and JS
    st.markdown(serve_css(otp_css_path), unsafe_allow_html=True)
    st.markdown(serve_js(otp_js_path), unsafe_allow_html=True)

if __name__ == "__main__":
    main()
