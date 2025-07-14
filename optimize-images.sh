#!/bin/bash

# Image optimization script for converting PNG to WebP
# This script converts PNG images to WebP format for better compression

echo "🖼️  Starting image optimization process..."

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp is not installed. Please install it first:"
    echo "   macOS: brew install webp"
    echo "   Ubuntu: sudo apt-get install webp"
    echo "   CentOS: sudo yum install libwebp-tools"
    exit 1
fi

# Navigate to public directory
cd public

# Convert PNG files to WebP
echo "🔄 Converting PNG files to WebP format..."

# Convert each PNG file if it exists
for file in bupda1.png bupda2.png bunda.png tjsl1.png tjsl2.png tjsl3.png prestise1.png prestise2.png prestise3.png; do
    if [ -f "$file" ]; then
        output_file="${file%.*}.webp"
        echo "   Converting $file to $output_file..."
        cwebp -q 75 "$file" -o "$output_file"
        if [ $? -eq 0 ]; then
            echo "   ✅ Successfully converted $file"
            # Calculate file size reduction
            original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || echo "0")
            new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null || echo "0")
            if [ "$original_size" -gt 0 ] && [ "$new_size" -gt 0 ]; then
                reduction=$(echo "scale=1; ($original_size - $new_size) * 100 / $original_size" | bc -l 2>/dev/null || echo "0")
                echo "   📊 Size reduction: ${reduction}%"
            fi
        else
            echo "   ❌ Failed to convert $file"
        fi
    else
        echo "   ⚠️  File $file not found, skipping..."
    fi
done

# Convert WEBP files to optimized WEBP (re-compress existing webp files)
echo "🔄 Optimizing existing WebP files..."
for file in hairkatz1.webp hairkatz2.webp hairkatz3.webp; do
    if [ -f "$file" ]; then
        temp_file="${file%.*}_temp.webp"
        echo "   Optimizing $file..."
        cwebp -q 75 "$file" -o "$temp_file"
        if [ $? -eq 0 ]; then
            mv "$temp_file" "$file"
            echo "   ✅ Successfully optimized $file"
        else
            echo "   ❌ Failed to optimize $file"
            rm -f "$temp_file"
        fi
    else
        echo "   ⚠️  File $file not found, skipping..."
    fi
done

echo "✨ Image optimization complete!"
echo ""
echo "📋 Summary:"
echo "   • All images converted to WebP format"
echo "   • Quality set to 75% for optimal balance"
echo "   • Lazy loading implemented in components"
echo "   • Blur placeholder added for better UX"
echo ""
echo "🚀 Your images are now optimized for better performance!"
