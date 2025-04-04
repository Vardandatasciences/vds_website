# Responsive CSS Framework

This directory contains a complete responsive CSS framework that makes all pages compatible with all screen sizes, from large desktop displays down to mobile phones.

## Core Files

- **breakpoints.css**: Contains standardized breakpoint variables (following Bootstrap 5 conventions)
- **responsive.css**: Core responsive utilities and components
- **responsive-grid.css**: CSS Grid-based responsive layout system
- **flex-utils.css**: Flexbox utilities for responsive layouts
- **mobile.css**: Mobile-specific optimizations and components

## Breakpoints

The framework uses these standard breakpoints:

- **Extra small (xs)**: < 576px (Mobile phones)
- **Small (sm)**: ≥ 576px (Large phones, small tablets)
- **Medium (md)**: ≥ 768px (Tablets)
- **Large (lg)**: ≥ 992px (Desktops)
- **Extra large (xl)**: ≥ 1200px (Large desktops)
- **Extra extra large (xxl)**: ≥ 1400px (Very large screens)

## Usage

### Basic Responsive Container

The `.container` class provides a responsive container with appropriate max-width at each breakpoint:

```html
<div class="container">
  <!-- Content here -->
</div>
```

### Grid System

Use the grid system for responsive layouts:

```html
<div class="grid-container">
  <div class="col-12 col-md-6 col-lg-4">
    <!-- This column will be full width on mobile, half width on tablets, 
         and one-third width on desktops -->
  </div>
</div>
```

### Responsive Flexbox

For flexible layouts, use the flex utilities:

```html
<div class="flex-stack-row gap-3">
  <!-- Items will stack vertically on mobile and display in a row on larger screens -->
</div>
```

### Mobile Optimizations

The framework includes mobile-specific optimizations like:

- Touch-friendly form controls
- Mobile navigation components
- Mobile-specific typography adjustments
- Proper handling of overflow issues

### Hide/Show Elements Based on Screen Size

Use the visibility classes to show/hide elements at different breakpoints:

```html
<div class="hide-xs show-md">
  <!-- This will be hidden on mobile but visible on tablets and up -->
</div>
```

## Best Practices

1. Always use a mobile-first approach (start with mobile styles, then add media queries for larger screens)
2. Use the container classes for consistent content width
3. Leverage the grid system for complex layouts
4. Use rem units for responsive scaling
5. Test on actual devices whenever possible

## Customization

The system is built with CSS variables, making it easy to customize the behavior without changing the core files. 