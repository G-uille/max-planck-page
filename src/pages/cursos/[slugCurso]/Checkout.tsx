import * as React from "react";
import useDisplay from "../../../hooks/use-display";
import { useParams } from "react-router-dom";
import { courses } from "../../../data/coursesMock";
import { Button, Checkbox, CircularProgress } from "@mui/material";
import { numberFormatGuaranies } from "../../../utils/numberFormat";
import MUIInput from "../../../components/common/MUIInput";
import useInscriptions from "../../..//hooks/use-inscriptions";
import { toast, ToastContainer } from "react-toastify";
import dayjs from "dayjs";
import CheckoutSuccess from "../../../components/courses/CheckoutSuccess";
import {
  getCourseView,
  getEnrollmentDisabledMessage,
  isCourseEnrollmentEnabled,
} from "../../../utils/courseView";

const CheckoutPage = () => {
  const { slugCurso } = useParams();
  const course = courses.find((c: any) => c.slug === slugCurso);
  const display = useDisplay();
  const { create, loading } = useInscriptions();

  const MATRICULA = 50000;

  const item = course ? getCourseView(course) : null;
  const coursePrice = Number(item?.price ?? 0);
  const matricula = Number(course?.matricula ?? 0);
  const total = coursePrice + matricula;
  const courseIdToSend = Number(course?.backendCourseId);

  const DEPARTAMENTOS_PY = [
    "Asunción (Capital)",
    "Alto Paraguay",
    "Alto Paraná",
    "Amambay",
    "Boquerón",
    "Caaguazú",
    "Caazapá",
    "Canindeyú",
    "Central",
    "Concepción",
    "Cordillera",
    "Guairá",
    "Itapúa",
    "Misiones",
    "Ñeembucú",
    "Paraguarí",
    "Presidente Hayes",
    "San Pedro",
  ];

  const [form, setForm] = React.useState({
    nombres: "",
    apellidos: "",
    cedula: "",
    ciudad: "Asunción (Capital)",
    email: "",
    telefono: "",
  });

  const [errors, setErrors] = React.useState({
    nombres: false,
    apellidos: false,
    cedula: false,
    email: false,
    telefono: false,
  });

  const [acceptWhatsapp, setAcceptWhatsapp] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [inscriptionId, setInscriptionId] = React.useState<number | null>(null);

  const updateForm = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateError = (key: string, isValid: boolean) => {
    setErrors((prev) => ({ ...prev, [key]: !isValid }));
  };

  const isFormValid =
    Object.values(errors).every((e) => e === false) &&
    Object.values(form).every(
      (v) => typeof v === "string" && v.trim() !== "",
    ) &&
    acceptWhatsapp;

  const inputBase =
    "ap-w-full ap-bg-[#FFFDF7] ap-border ap-border-[#DED4BB] ap-rounded-xl ap-px-4 ap-py-3 ap-text-sm ap-text-[#111111] focus:ap-outline-none focus:ap-border-[#FFC730]";

  const onSubmit = async () => {
    try {
      if (!isFormValid) {
        toast.error("Rellene los campos correctamente");
        return;
      }

      if (!courseIdToSend || Number.isNaN(courseIdToSend)) {
        toast.error(
          "Este curso no está vinculado correctamente al sistema de inscripciones.",
        );
        return;
      }

      const response = await create({
        name: form.nombres,
        lastname: form.apellidos,
        dni: form.cedula,
        ciudad: form.ciudad,
        email: form.email,
        phone: form.telefono,
        courseId: courseIdToSend,
        dueDate: dayjs().add(1, "month").format("YYYY-MM-DD"),
        whatsappOptIn: acceptWhatsapp,
      });

      if (response?.status === 201 || response?.response?.status === 201) {
        const data = response?.data ?? response?.response?.data ?? response;

        const id =
          data?.inscription?.id ??
          data?.data?.inscription?.id ??
          data?.inscriptionId ??
          null;

        setInscriptionId(id);
        setSuccess(true);
        return;
      }

      toast.error("No se pudo completar la inscripción");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ??
          error?.message ??
          "No se pudo inscribirte",
      );
    }
  };

  if (!course || !item) {
    return (
      <div className="ap-bg-[#F3EEDC] ap-min-h-screen ap-flex ap-items-center ap-justify-center">
        <p className="ap-text-[#111111] ap-font-semibold">
          Curso no encontrado
        </p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="ap-bg-[#F3EEDC] ap-min-h-screen ap-flex ap-items-center ap-justify-center ap-px-4">
        <div className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-3xl ap-p-8 ap-text-center ap-max-w-md">
          <h1 className="ap-text-[#111111] ap-text-2xl ap-font-extrabold">
            Curso no encontrado
          </h1>

          <p className="ap-text-[#5D574A] ap-text-sm ap-leading-6 ap-mt-3">
            El curso solicitado no existe o ya no está disponible.
          </p>
        </div>
      </div>
    );
  }

  if (!isCourseEnrollmentEnabled(course)) {
    return (
      <div className="ap-bg-[#F3EEDC] ap-min-h-screen ap-flex ap-items-center ap-justify-center ap-px-4">
        <div className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-3xl ap-p-8 ap-text-center ap-max-w-md ap-shadow-[0_24px_70px_rgba(70,55,20,0.12)]">
          <span className="ap-inline-flex ap-bg-[#FFF1B8] ap-text-[#8A6A00] ap-border ap-border-[#FFE27A] ap-text-xs ap-font-extrabold ap-rounded-full ap-px-3 ap-py-1">
            Inscripción no habilitada
          </span>

          <h1 className="ap-text-[#111111] ap-text-2xl ap-font-extrabold ap-mt-4">
            Este curso todavía no permite inscripción online
          </h1>

          <p className="ap-text-[#5D574A] ap-text-sm ap-leading-6 ap-mt-3">
            {getEnrollmentDisabledMessage(course)}
          </p>

          <a
            href="/cursos"
            className="ap-mt-6 ap-inline-flex ap-items-center ap-justify-center ap-bg-[#FFC730] ap-text-[#111111] ap-font-extrabold ap-rounded-full ap-px-6 ap-py-3"
          >
            Volver a cursos
          </a>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <CheckoutSuccess
        inscriptionId={inscriptionId}
        courseSlug={course.slug}
        courseTitle={item.title}
        courseWhatsappPhone={(course as any).consultWhatsappPhone}
      />
    );
  }

  return (
    <>
      <div
        className={`ap-bg-[#F3EEDC] ap-min-h-screen ap-pt-8 ${
          display.smAndDown
            ? "ap-px-4 ap-pb-40"
            : "ap-px-[10vw] ap-grid ap-grid-cols-[minmax(0,1fr)_420px] ap-gap-8 ap-items-start"
        }`}
      >
        <div className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-3xl ap-p-6 md:ap-p-8 ap-flex ap-flex-col ap-gap-5 ap-shadow-[0_24px_70px_rgba(70,55,20,0.12)]">
          <div>
            <span className="ap-inline-flex ap-bg-[#FFC730] ap-text-[#111111] ap-text-xs ap-font-extrabold ap-rounded-full ap-px-4 ap-py-2">
              Inscripción online
            </span>

            <h1 className="ap-text-[#111111] ap-text-2xl md:ap-text-3xl ap-font-extrabold ap-mt-4">
              Tu inscripción
            </h1>

            <p className="ap-text-[#5D574A] ap-text-sm ap-leading-6 ap-mt-2">
              Completá los datos del estudiante y del contacto responsable para
              registrar la inscripción al programa.
            </p>
          </div>

          <div className="ap-h-px ap-bg-[#E7DEC8]" />

          <span className="ap-text-[#8A6A00] ap-text-sm ap-font-extrabold ap-uppercase ap-tracking-[0.16em]">
            Datos del estudiante
          </span>

          <MUIInput
            label="Nombres del estudiante a inscribir *"
            value={form.nombres}
            rules={["required", "isAlphabet"]}
            filledColor="#FFFDF7"
            onChange={(e) => updateForm("nombres", e.target.value)}
            onChangeError={(isValid) => updateError("nombres", isValid)}
          />

          <MUIInput
            label="Apellidos del estudiante a inscribir *"
            value={form.apellidos}
            rules={["required", "isAlphabet"]}
            filledColor="#FFFDF7"
            onChange={(e) => updateForm("apellidos", e.target.value)}
            onChangeError={(isValid) => updateError("apellidos", isValid)}
          />

          <MUIInput
            label="Cédula del estudiante a inscribir *"
            value={form.cedula}
            rules={["required", "isNumber", "minLength"]}
            filledColor="#FFFDF7"
            onChange={(e) => updateForm("cedula", e.target.value)}
            onChangeError={(isValid) => updateError("cedula", isValid)}
          />

          <div className="ap-flex ap-flex-col ap-gap-2">
            <label className="ap-text-sm ap-text-[#3C362B] ap-font-semibold">
              Departamento / ciudad *
            </label>

            <select
              className={inputBase}
              value={form.ciudad}
              onChange={(e) => updateForm("ciudad", e.target.value)}
            >
              {DEPARTAMENTOS_PY.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div className="ap-h-px ap-bg-[#E7DEC8] ap-my-1" />

          <span className="ap-text-[#8A6A00] ap-text-sm ap-font-extrabold ap-uppercase ap-tracking-[0.16em]">
            Contacto del estudiante o tutor/a
          </span>

          <MUIInput
            label="Correo electrónico *"
            value={form.email}
            rules={["required", "email"]}
            filledColor="#FFFDF7"
            onChange={(e) => updateForm("email", e.target.value)}
            onChangeError={(isValid) => updateError("email", isValid)}
          />

          <MUIInput
            label="Teléfono *"
            value={form.telefono}
            rules={["required", "phoneNumber"]}
            filledColor="#FFFDF7"
            onChange={(e) => updateForm("telefono", e.target.value)}
            onChangeError={(isValid) => updateError("telefono", isValid)}
          />

          {display.smAndDown && <div className="ap-py-8" />}
        </div>

        {!display.smAndDown && (
          <aside className="ap-sticky ap-top-28 ap-bg-[#FFFDF7] ap-text-[#111111] ap-border ap-border-[#DDD3B8] ap-rounded-3xl ap-p-6 ap-flex ap-flex-col ap-gap-4 ap-shadow-[0_24px_70px_rgba(70,55,20,0.16)]">
            <div>
              <span className="ap-inline-flex ap-bg-[#FFF1B8] ap-text-[#8A6A00] ap-border ap-border-[#FFE27A] ap-text-xs ap-font-extrabold ap-rounded-full ap-px-3 ap-py-1">
                Resumen
              </span>

              <h3 className="ap-text-2xl ap-font-extrabold ap-mt-4">
                Resumen del pedido
              </h3>

              <p className="ap-text-[#5D574A] ap-text-sm ap-leading-6 ap-mt-2">
                Revisá el detalle del pago inicial para completar la
                inscripción.
              </p>
            </div>

            <div className="ap-bg-[#F4EEDC] ap-border ap-border-[#DED4BB] ap-rounded-2xl ap-p-4 ap-flex ap-flex-col ap-gap-3">
              <p className="ap-text-[#111111] ap-font-extrabold ap-leading-6">
                {item.title}
              </p>

              <div className="ap-flex ap-justify-between ap-items-center">
                <span className="ap-text-sm ap-text-[#6D6658]">
                  Precio del curso
                </span>
                <span className="ap-text-sm ap-font-extrabold ap-text-[#111111]">
                  {numberFormatGuaranies(coursePrice)}
                </span>
              </div>

              <div className="ap-flex ap-justify-between ap-items-center">
                <span className="ap-text-sm ap-text-[#6D6658]">Matrícula</span>
                <span className="ap-text-sm ap-font-extrabold ap-text-[#111111]">
                  {numberFormatGuaranies(matricula)}
                </span>
              </div>

              <div className="ap-border-t ap-border-[#D8D0B8] ap-pt-4 ap-flex ap-justify-between ap-items-center">
                <span className="ap-text-sm ap-font-bold ap-text-[#3C362B]">
                  Total a pagar hoy
                </span>

                <span className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
                  {numberFormatGuaranies(total)}
                </span>
              </div>

              <span className="ap-text-xs ap-text-[#6D6658] ap-leading-5">
                * El total incluye la matrícula, que es un pago único, más la
                primera mensualidad.
              </span>
            </div>

            <div className="ap-bg-[#FFF8D6] ap-text-[#3C362B] ap-border ap-border-[#FFE27A] ap-rounded-2xl ap-p-4">
              <p className="ap-text-sm ap-font-extrabold ap-text-[#8A6A00]">
                Importante
              </p>

              <p className="ap-text-xs ap-leading-5 ap-mt-1">
                Para completar la inscripción debe aceptar recibir
                notificaciones vía WhatsApp.
              </p>
            </div>

            <label className="ap-flex ap-items-start ap-gap-2">
              <Checkbox
                checked={acceptWhatsapp}
                onChange={(e) => setAcceptWhatsapp(e.target.checked)}
                sx={{
                  color: "#8A6A00",
                  padding: "0",
                  marginTop: "2px",
                  "&.Mui-checked": { color: "#8A6A00" },
                }}
              />

              <span className="ap-text-sm ap-text-[#3C362B] ap-leading-5">
                Acepto recibir notificaciones por WhatsApp sobre mi inscripción,
                horarios y materiales.
              </span>
            </label>

            <Button
              fullWidth
              type="button"
              disabled={!isFormValid || loading}
              variant="contained"
              onClick={onSubmit}
              sx={{
                backgroundColor: isFormValid ? "#FFC730" : "#DED4BB",
                color: isFormValid ? "#111111" : "#8D8573",
                border: isFormValid ? "1px solid #F3BE00" : "1px solid #CFC4A8",
                boxShadow: "none",
                textTransform: "none",
                fontFamily: "Poppins",
                fontSize: "14px",
                borderRadius: "999px",
                fontWeight: 800,
                padding: "13px",
                cursor: isFormValid ? "pointer" : "not-allowed",
                transition: "all .2s ease",
                "&:hover": {
                  backgroundColor: isFormValid ? "#FFD24A" : "#DED4BB",
                  boxShadow: "none",
                },
                "&.Mui-disabled": {
                  backgroundColor: "#DED4BB",
                  color: "#8D8573",
                },
              }}
            >
              <span className="ap-flex ap-items-center ap-justify-center ap-gap-2">
                {loading && (
                  <CircularProgress size={18} sx={{ color: "#8A6A00" }} />
                )}
                {!loading && <span>Completar inscripción</span>}
              </span>
            </Button>

            {!isFormValid && (
              <span className="ap-text-xs ap-text-[#6D6658]">
                Complete todos los campos obligatorios y acepte el envío por
                WhatsApp.
              </span>
            )}
          </aside>
        )}

        {display.smAndDown && (
          <div className="ap-fixed ap-bottom-0 ap-left-0 ap-right-0 ap-bg-[#FFFDF7] ap-z-[100000] ap-border-t ap-border-[#DDD3B8] ap-p-4 ap-px-6 ap-shadow-[0_-12px_35px_rgba(70,55,20,0.12)]">
            <div className="ap-flex ap-flex-col ap-gap-2 ap-mb-3">
              <div className="ap-flex ap-justify-between ap-items-center ap-gap-3">
                <span className="ap-text-[#111111] ap-w-8/12 ap-text-sm ap-font-bold ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis">
                  {item.title}
                </span>

                <span className="ap-text-[#8A6A00] ap-font-extrabold">
                  {numberFormatGuaranies(total)}
                </span>
              </div>

              <div className="ap-text-xs ap-text-[#6D6658] ap-flex ap-justify-between ap-gap-3">
                <span>Curso: {numberFormatGuaranies(coursePrice)}</span>
                <span>Matrícula: {numberFormatGuaranies(matricula)}</span>
              </div>
            </div>

            <label className="ap-flex ap-items-start ap-gap-2 ap-mb-3">
              <Checkbox
                checked={acceptWhatsapp}
                onChange={(e) => setAcceptWhatsapp(e.target.checked)}
                sx={{
                  color: "#8A6A00",
                  padding: "0",
                  marginTop: "2px",
                  "&.Mui-checked": { color: "#8A6A00" },
                }}
              />

              <span className="ap-text-xs ap-text-[#3C362B] ap-leading-4">
                Acepto recibir notificaciones por WhatsApp.
              </span>
            </label>

            <Button
              fullWidth
              disabled={!isFormValid || loading}
              variant="contained"
              type="button"
              onClick={onSubmit}
              sx={{
                backgroundColor: isFormValid ? "#FFC730" : "#DED4BB",
                color: isFormValid ? "#111111" : "#8D8573",
                border: isFormValid ? "1px solid #F3BE00" : "1px solid #CFC4A8",
                boxShadow: "none",
                textTransform: "none",
                fontFamily: "Poppins",
                fontSize: "14px",
                borderRadius: "999px",
                fontWeight: 800,
                padding: "12px",
                cursor: isFormValid ? "pointer" : "not-allowed",
                transition: "all .2s ease",
                "&:hover": {
                  backgroundColor: isFormValid ? "#FFD24A" : "#DED4BB",
                  boxShadow: "none",
                },
                "&.Mui-disabled": {
                  backgroundColor: "#DED4BB",
                  color: "#8D8573",
                },
              }}
            >
              <span className="ap-flex ap-items-center ap-justify-center ap-gap-2">
                {loading && (
                  <CircularProgress size={18} sx={{ color: "#8A6A00" }} />
                )}
                {!loading && <span>Completar inscripción</span>}
              </span>
            </Button>
          </div>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default CheckoutPage;
