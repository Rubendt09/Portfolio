"use client";

import { Download } from "@mui/icons-material";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Divider,
  CardContent,
  Card,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const experiences = [
    {
      title: "Analista de Proyectos - Pacifico Seguros",
      description: [
        "Implementé un modelo de IA que lee documentos PDF de la empresa y proporciona respuestas detalladas en base a ellos.",
        "Desarrollé la interfaz de carga de archivos y la aplicación EndUser Pro, donde se puede acceder a la IA, además de consultar el historial de chats.",
        "Realicé el despliegue en Vercel y Azure.",
      ],
      tags: ["Next.js", "Spring", "Stack IA", "Vercel", "Azure"],
      period: "Mayo 2024 - Actualidad",
    },
    {
      title: "Mobile Developer - Inklop | Freelancer",
      description: [
        "Desarrollé las interfaces de usuario de la aplicación.",
        "Implementé una comunicación eficiente con el backend y los servicios de Firebase.",
        "Gestioné bases de datos locales en dispositivos móviles.",
        "Optimizé el acceso a los recursos físicos del dispositivo.",
      ],
      tags: ["Dart", "Swift", "Kotlin", "Flutter", "Java", "Firebase", "GCP"],
      period: "Junio 2024 - Septiembre 2024",
    },
    {
      title: "Full Stack Developer - Xinnux",
      description: [
        "Colaboré en el desarrollo del ERP interno de MarcoMkt desde su concepción.",
        "Analicé requerimientos funcionales de la aplicaion.",
        "Desarrollé un calendario para citas, notificaciones, ventas, productos y gestión de clientes.",
        "Participé en el despliegue de la aplicación.",
      ],
      tags: ["Next.js", "Nest.js", "MongoDB", "AWS", "Vercel"],
      period: "Septiembre 2023 - Mayo 2024",
    },
    {
      title: "Backend Developer - Marco Marketing | Freelancer",
      description: [
        "Desarrollé el ERP interno de MarcoMkt desde su concepción.",
        "Analicé requerimientos funcionales y colaboré en el diseño de interfaces de usuario.",
        "Diseñé y desarrollé un calendario para citas, notificaciones, ventas, productos y gestión de clientes.",
      ],
      tags: ["Java", "Spring", "MySQL", "MongoDB", "Azure"],
      period: "Mayo 2023 - Agosto 2023",
    },
    {
      title: "Java Developer - Seven Seeds Coffee ",
      description: [
        "Recopilé y analicé los requisitos del proyecto para asegurarme de que se cumplieran las expectativas del cliente.",
        "Participé en el diseño de la arquitectura de la aplicación, en base de datos y frontend.",
        "Mi principal función fue desarrollar el backend de la aplicación y comunicarla con la base de datos.",
      ],
      tags: ["Java", "Spring", "MySQL"],
      period: "Enero 2023 - Marzo 2023",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Break Time",
      description:
        "Una aplicación para descubrir eventos en tu ciudad, con detalles sobre precios, ubicación, categorías y recomendaciones personalizadas. Explora conciertos, talleres, festivales y más, planificando experiencias únicas de manera fácil y rápida.",
      tags: [
        "Dart",
        "Swift",
        "Kotlin",
        "Flutter",
        "Firebase",
        "GoogleMaps Api",
      ],
      imageUrl: "/images/breakTime.png",
    },
    {
      id: 2,
      title: "Verox",
      description:
        "Aplicación diseñada para microempresarios que facilita la gestión de ventas e inventarios, mientras ofrece formación en finanzas para mejorar la rentabilidad y toma de decisiones. Ideal para impulsar y formalizar negocios.",
      tags: ["Java", "JavaScript", "Next.js"],
      imageUrl: "/images/verox.png",
    },
    {
      id: 3,
      title: "UTP+ Onb",
      description:
        "App onboarding para nuevos estudiantes de la UTP, con el fin de dar a conocer las actividades que la universidad tiene para ellos. Además de promover la competencia con un sistema de puntuación en base a los resultados de sus exámenes",
      tags: ["Java", "JavaScript", "Next.js", "PWA"],
      imageUrl: "/images/onb.png",
    },
    {
      id: 4,
      title: "EndUser Pro",
      description:
        "Interfaz que consume a StackIA para responder preguntas en base a los documentos de una empresa, con el fin de facilitar la búsqueda de información específica, agilizando procesos y mejorando la precisión en la consulta de datos clave.",
      tags: ["Next.js", "React", "Stack.IA"],
      imageUrl: "/images/endUser_Pro.png",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url(/images/font/background.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          marginTop: 12,
        }}
      >
        {/**Perfil  */}
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* Left Section */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={5} textAlign="center">
                <Avatar
                  src="/images/profileImage.jpeg"
                  alt="Profile Picture"
                  sx={{
                    width: { xs: 120, sm: 150, md: 180 },
                    height: { xs: 120, sm: 150, md: 180 },
                    margin: "0 auto",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Ruben Saul
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Dominguez Trujillo
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    textAlign: {
                      xs: "center",
                      marginTop: 12,
                      sm: "left",
                    },
                  }}
                >
                  Full Stack Developer
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.9rem",
                    color: "#B0BEC5",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Creo experiencias digitales centradas en la experiencia del
                  usuario
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", sm: "flex-start" },
                  }}
                >
                  <Link
                    href="https://drive.usercontent.google.com/download?id=1yGilFfLEMXbcX-wnD-DbxNzzCTyl083U&export=download&authuser=0&confirm=t&uuid=39f4a08f-4527-48a1-adec-c5ba504cc6c2&at=AIrpjvOjb96z0QBS7M_Ll9y2uYTD:1737236914331"
                    download
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      color: "white",
                    }}
                  >
                    <Typography variant="button" style={{ fontSize: "0.9rem" }}>
                      DESCARGA MI CV
                    </Typography>
                    <Download sx={{ ml: 1 }} />
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "60",
                width: "100%",
                marginTop: "2rem", // Añadimos margen superior
                marginBottom: "2rem", // Añadimos margen inferior
              }}
            >
              <img
                src="/images/lenguages.png"
                alt="Descripción"
                style={{ width: "65%", height: "auto" }}
              />
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.5rem" }, // Tamaño dinámico de fuente
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Soy un desarrollador full stack con una sólida trayectoria en
              análisis y programación, especializado en el desarrollo backend.
              Mi experiencia me permite crear soluciones eficientes y
              personalizadas que se adaptan a las necesidades específicas de
              cada proyecto. Trabajo en equipos ágiles, donde colaboro
              estrechamente con otros profesionales para asegurar la entrega de
              proyectos de alta calidad.
            </Typography>
          </Grid>
        </Grid>

        {/**Redes  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4rem",
          }}
        >
          <Link
            href="https://www.linkedin.com/in/rubendotru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ mx: 2 }}>
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </Box>
          </Link>

          <Link
            href="https://github.com/Rubendt09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ mx: 2 }}>
              <Image
                src="/images/github.png"
                alt="GitHub"
                width={40}
                height={40}
              />
            </Box>
          </Link>

          <Link
            href="https://www.instagram.com/rubendt09/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ mx: 2 }}>
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
              />
            </Box>
          </Link>

          <Link
            href="https://platzi.com/p/rubendotru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box sx={{ mx: 2 }}>
              <Image
                src="/images/platzi.png"
                alt="Portfolio"
                width={40}
                height={40}
              />
            </Box>
          </Link>
        </Box>
        <Divider
          sx={{
            backgroundColor: "white",
            height: "3px",
            marginY: "1rem",
            borderRadius: "10px",
          }}
        />

        {/**Experiencia */}
        <Box
          sx={{
            marginTop: 12,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Experiencia
          </Typography>

          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#112240",
                    color: "white",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                    height: "100%",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#64FFDA" }}
                    >
                      {exp.title}
                    </Typography>
                    <ul
                      style={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        color: "#8892B0",
                      }}
                    >
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          style={{ fontSize: "0.9rem", lineHeight: 1.6 }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                        marginTop: "1rem",
                      }}
                    >
                      {exp.tags.map((tag, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            backgroundColor: "#0A192F",
                            color: "#64FFDA",
                            borderRadius: "5px",
                            padding: "0.3rem 0.6rem",
                            fontSize: "0.75rem",
                            fontWeight: "bold",
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        marginTop: "1rem",
                        color: "#8892B0",
                        textAlign: "right",
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/**Proyectos */}
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}
          >
            Proyectos
          </Typography>
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={6} key={project.id}>
                <Card
                  sx={{
                    backgroundColor: "#112240",
                    color: "white",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#64FFDA" }}
                    >
                      {project.title}
                    </Typography>
                    <Grid
                      container
                      spacing={2}
                      sx={{ mt: 1 }}
                      direction={{ xs: "column", sm: "row" }}
                    >
                      <Grid item xs={12} sm={6}>
                        <CardMedia
                          component="img"
                          height="100%"
                          image={project.imageUrl}
                          alt="Project Image"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="body2" sx={{ color: "#8892B0" }}>
                          {project.description}
                        </Typography>
                      </Grid>
                    </Grid>

                    <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap" }}>
                      {project.tags.map((tag, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            backgroundColor: "#0A192F",
                            color: "#64FFDA",
                            borderRadius: "5px",
                            padding: "0.3rem 0.6rem",
                            fontSize: "0.75rem",
                            fontWeight: "bold",
                            marginRight: "0.5rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
