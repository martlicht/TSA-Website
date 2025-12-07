# Sistema de Animaciones de Scroll

## 📋 Resumen

Sistema centralizado y simétrico de animaciones que funciona en ambas direcciones de scroll (arriba/abajo) y detecta elementos sin importar dónde se abre la página.

## 🎯 Características

- ✅ **Simétrico**: Funciona al hacer scroll hacia arriba o abajo
- ✅ **Robusto**: Detecta elementos visibles al cargar la página
- ✅ **Centralizado**: Toda la configuración en un solo lugar
- ✅ **Fácil de usar**: Solo agregar una clase CSS
- ✅ **Performante**: Usa IntersectionObserver (hardware accelerated)

## 🚀 Uso Básico

### Animación Simple

```astro
<div class="scroll-fade-in">
  Este elemento se animará al entrar al viewport
</div>
```

### Animación con Delay

**Opción 1: Usando data-delay (Recomendado)**
```astro
<div class="scroll-fade-in" data-delay="1">
  Aparece con 100ms de delay
</div>

<div class="scroll-fade-in" data-delay="2">
  Aparece con 200ms de delay
</div>
```

**Opción 2: Usando style inline (Legacy)**
```astro
<div class="scroll-fade-in" style="animation-delay: 100ms;">
  Aparece con 100ms de delay
</div>
```

### Animaciones Secuenciales (Cards, Grid Items)

```astro
{items.map((item, index) => (
  <div class="scroll-fade-in" data-delay={index + 1}>
    <Card {...item} />
  </div>
))}
```

## ⚙️ Configuración

Toda la configuración está en `src/layouts/Layout.astro`:

```javascript
const CONFIG = {
  selectors: '.scroll-animate, .scroll-fade-in',
  rootMargin: '100px',  // Detecta elementos 100px antes de entrar
  threshold: 0.1,       // 10% del elemento debe ser visible
  reAnimate: false      // false = anima solo una vez
};
```

### Opciones de Configuración

| Opción | Tipo | Default | Descripción |
|--------|------|---------|-------------|
| `selectors` | string | `'.scroll-animate, .scroll-fade-in'` | Selectores CSS de elementos a animar |
| `rootMargin` | string | `'100px'` | Margen de detección (simétrico en todas direcciones) |
| `threshold` | number | `0.1` | % del elemento que debe ser visible (0.0 - 1.0) |
| `reAnimate` | boolean | `false` | Si `true`, anima cada vez que entra al viewport |

## 🎨 Estilos CSS

Los estilos están definidos en `src/layouts/Layout.astro`:

### Animaciones de Scroll

```css
/* Estado inicial: invisible */
.scroll-fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: opacity, transform;
}

/* Estado visible: aparece con fade + slide up */
.scroll-fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Animaciones de Hover (Focus Effect)

```css
/* Efecto focus con sombra - sin elevación */
.hover-focus {
  transition: box-shadow 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hover-focus:hover {
  box-shadow: 0 0 0 4px rgba(104, 194, 140, 0.1),
              0 8px 24px rgba(0, 0, 0, 0.12),
              0 4px 8px rgba(0, 0, 0, 0.08);
}
```

**Variantes disponibles:**

| Clase | Uso | Efecto |
|-------|-----|--------|
| `.hover-focus` | Cards generales | Sombra verde suave + sombra negra |
| `.hover-focus-primary` | Elementos destacados | Sombra verde más intensa |
| `.hover-focus-subtle` | Elementos blancos/claros | Sombra muy sutil |

## 📝 Ejemplos de Uso

### Hero Section (Sin animación de scroll)

```astro
<!-- Hero usa animación CSS pura, no IntersectionObserver -->
<h1 class="hero-fade-in">
  Título del Hero
</h1>
```

### Product Cards (Animación secuencial)

```astro
{products.map((product, index) => (
  <div class="scroll-fade-in" style={`animation-delay: ${index * 120}ms;`}>
    <ProductCard {...product} />
  </div>
))}
```

### Stats Grid (Animación simultánea con delays)

```astro
{stats.map((stat, index) => (
  <div class="scroll-fade-in" data-delay={index + 1}>
    <StatCard {...stat} />
  </div>
))}
```

### Cards con Efecto Focus (Hover sin elevación)

```astro
<!-- Card que se mantiene estático pero con sombra focus -->
<div class="stat-card hover-focus-subtle">
  Contenido del card
</div>

<!-- Card con efecto más intenso -->
<div class="product-card hover-focus-primary">
  Contenido del card
</div>

<!-- Card con efecto estándar -->
<div class="feature-card hover-focus">
  Contenido del card
</div>
```

### Combinando Scroll + Hover

```astro
<!-- Anima al entrar + efecto focus al hover -->
{items.map((item, index) => (
  <div class="scroll-fade-in" data-delay={index + 1}>
    <div class="card hover-focus-subtle">
      {item.content}
    </div>
  </div>
))}
```

## 🔧 Troubleshooting

### Problema: Elementos no se animan al hacer scroll hacia arriba

**Solución**: El sistema v2.0 ya maneja esto. El `rootMargin: '100px'` es simétrico y detecta elementos en ambas direcciones.

### Problema: Animaciones se ven "cortadas" o "pop"

**Solución**: 
1. Asegúrate de que el elemento animable sea un wrapper, no el elemento con hover effects
2. Separa las animaciones de scroll de las transiciones de hover

```astro
<!-- ✅ Correcto -->
<div class="scroll-fade-in" data-delay="1">
  <div class="card-with-hover-effects">
    Contenido
  </div>
</div>

<!-- ❌ Incorrecto -->
<div class="scroll-fade-in card-with-hover-effects" data-delay="1">
  Contenido
</div>
```

### Problema: Elementos ya visibles al cargar no se animan

**Solución**: El IntersectionObserver detecta automáticamente elementos visibles al cargar y los anima. Si no funciona, verifica que el elemento tenga la clase `scroll-fade-in`.

## 🎯 Best Practices

1. **Usa data-delay para delays**: Más limpio que style inline
2. **Separa animaciones de hover effects**: Evita conflictos
3. **Usa delays consistentes**: 100-150ms entre elementos secuenciales
4. **No animes elementos muy pequeños**: Puede ser distractivo
5. **Mantén el threshold bajo**: 0.1 - 0.15 es ideal

## 🔄 Migración desde Sistema Antiguo

Si tienes código con el sistema antiguo:

```astro
<!-- Antiguo (sigue funcionando) -->
<div class="scroll-fade-in" style="animation-delay: 100ms;">
  Contenido
</div>

<!-- Nuevo (recomendado) -->
<div class="scroll-fade-in" data-delay="1">
  Contenido
</div>
```

Ambos funcionan, pero `data-delay` es más limpio y fácil de mantener.

## 📊 Performance

- **IntersectionObserver**: Nativo del browser, muy eficiente
- **Hardware Acceleration**: `will-change: opacity, transform`
- **Cleanup**: Se desconecta automáticamente en transiciones de página
- **Fallback**: Navegadores antiguos muestran elementos inmediatamente

## 🐛 Debugging

Para activar logs de debugging, descomenta esta línea en `Layout.astro`:

```javascript
// console.log(`🎨 Scroll Animations: Observing ${elements.length} elements`);
```

Esto mostrará cuántos elementos están siendo observados.

