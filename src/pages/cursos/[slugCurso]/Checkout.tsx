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

const CheckoutPage = () => {
  const { slugCurso } = useParams();
  const course = courses.find((c) => c.slug === slugCurso);
  const display = useDisplay();
  const { create, loading } = useInscriptions();

  const [form, setForm] = React.useState({
    nombres: "",
    apellidos: "",
    cedula: "",
    ciudad: "Asunción",
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

  const updateForm = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateError = (key: string, isValid: boolean) => {
    setErrors((prev) => ({ ...prev, [key]: !isValid }));
  };

  if (!course) return null;

  const update = (k: string, v: any) => setForm((p) => ({ ...p, [k]: v }));

  const isFormValid =
    Object.values(errors).every((e) => e === false) &&
    Object.values(form).every(
      (v) => typeof v === "string" && v.trim() !== "",
    ) &&
    acceptWhatsapp;

  const inputBase =
    "ap-w-full ap-bg-[#1F1F1F] ap-border ap-border-[#3F3F3F] ap-rounded-md ap-px-3 ap-py-2 ap-text-sm ap-text-white focus:ap-outline-none focus:ap-border-[#FFC62D]";

  const onSubmit = async () => {
    try {
      if (!isFormValid) {
        toast.error("Rellene los campos correctamente");
        return;
      }

      const response = await create({
        name: form.nombres,
        lastname: form.apellidos,
        dni: form.cedula,
        ciudad: form.ciudad,
        email: form.email,
        phone: form.telefono,
        courseId: 1,
        dueDate: dayjs().set("month", 1).toString(),
        whatsappOptIn: acceptWhatsapp,
      });

      console.log("respuesta", response);

      if (response?.status === 201 || response?.response?.status === 201) {
        setSuccess(true);
        return;
      }
    } catch (error) {
      console.log("este es el error", error.toString());

      toast.error(
        error?.response?.data?.message ??
          error?.message ??
          "No se pudo inscribirte",
      );
    }
  };

  if (success) {
    return <CheckoutSuccess />;
  }

  return (
    <div
      className={`ap-bg-[#111111]  ap-pt-6 ${
        display.smAndDown
          ? "ap-px-4 ap-pb-32"
          : "ap-px-[18vw] ap-grid ap-grid-cols-2 ap-gap-8"
      }`}
    >
      {/* FORM */}
      <div className="ap-bg-[#282828] ap-bg-opacity-55 ap-border ap-border-[#3F3F3F] ap-rounded-xl ap-p-6 ap-flex ap-flex-col ap-gap-4">
        <h1 className="ap-text-white ap-text-lg ap-font-semibold">
          Tu inscripción
        </h1>

        <span className="ap-text-gray-400 ap-text-sm">
          Datos del estudiante
        </span>

        <MUIInput
          label="Nombres del estudiante a inscribir *"
          value={form.nombres}
          rules={["required", "isAlphabet"]}
          filledColor="#1F1F1F"
          onChange={(e) => updateForm("nombres", e.target.value)}
          onChangeError={(isValid) => updateError("nombres", isValid)}
        />

        <MUIInput
          label="Apellidos del estudiante a inscribir *"
          value={form.apellidos}
          rules={["required", "isAlphabet"]}
          filledColor="#1F1F1F"
          onChange={(e) => updateForm("apellidos", e.target.value)}
          onChangeError={(isValid) => updateError("apellidos", isValid)}
        />

        <MUIInput
          label="Cédula del estudiante a inscribir *"
          value={form.cedula}
          rules={["required", "isNumber", "minLength"]}
          filledColor="#1F1F1F"
          onChange={(e) => updateForm("cedula", e.target.value)}
          onChangeError={(isValid) => updateError("cedula", isValid)}
        />

        <select
          className={inputBase}
          value={form.ciudad}
          onChange={(e) => update("ciudad", e.target.value)}
        >
          <option>Asunción</option>
          <option>Luque</option>
          <option>San Lorenzo</option>
          <option>Capiatá</option>
        </select>

        <span className="ap-text-gray-400 ap-text-sm ap-mt-2">
          Contacto (estudiante o tutor/a)
        </span>

        <MUIInput
          label="Correo electrónico *"
          value={form.email}
          rules={["required", "email"]}
          filledColor="#1F1F1F"
          onChange={(e) => updateForm("email", e.target.value)}
          onChangeError={(isValid) => updateError("email", isValid)}
        />

        <MUIInput
          label="Teléfono *"
          value={form.telefono}
          rules={["required", "phoneNumber"]}
          filledColor="#1F1F1F"
          onChange={(e) => updateForm("telefono", e.target.value)}
          onChangeError={(isValid) => updateError("telefono", isValid)}
        />

        {display.smAndDown && <div className="ap-py-8" />}
      </div>

      {/* SUMMARY DESKTOP */}
      {!display.smAndDown && (
        <aside className="ap-bg-[#282828] ap-bg-opacity-55 ap-border ap-border-[#3F3F3F] ap-rounded-xl ap-p-6 ap-flex ap-flex-col ap-gap-4">
          <h3 className="ap-text-white ap-font-semibold">Resumen del pedido</h3>

          <p className="ap-text-gray-400">{course.titulo}</p>

          <strong className="ap-text-2xl ap-text-[#FFC62D]">
            {numberFormatGuaranies(course.precio)}
          </strong>

          <div className="ap-bg-[#FFC62D] ap-bg-opacity-20 ap-text-[#FFC62D] ap-text-sm ap-p-3 ap-rounded-md">
            Para completar la inscripción debe aceptar recibir notificaciones
            vía WhatsApp.
          </div>

          <label className="ap-flex ap-items-center ap-gap-2">
            <Checkbox
              checked={acceptWhatsapp}
              onChange={(e) => setAcceptWhatsapp(e.target.checked)}
              sx={{
                color: "rgba(255,255,255,0.6)",
                "&.Mui-checked": { color: "#FFC62D" },
              }}
            />

            <span className="ap-text-sm ap-text-white">
              Acepto recibir notificaciones por WhatsApp
            </span>
          </label>

          <Button
            fullWidth
            type="button"
            disabled={!isFormValid || loading}
            variant="contained"
            onClick={onSubmit}
            sx={{
              backgroundColor: isFormValid ? "#FFC62D" : "#3A3A3A",
              color: isFormValid ? "#000" : "rgba(255,255,255,0.45)",
              border: isFormValid ? "1px solid #FDD877" : "1px solid #4A4A4A",
              boxShadow: "none",
              textTransform: "none",
              fontFamily: "Poppins",
              fontSize: "14px",
              borderRadius: "10px",
              padding: "10px",
              cursor: isFormValid ? "pointer" : "not-allowed",
              transition: "all .2s ease",
              "&:hover": {
                backgroundColor: isFormValid ? "#FFD24A" : "#3A3A3A",
                boxShadow: "none",
              },
              "&.Mui-disabled": {
                backgroundColor: "#3A3A3A",
                color: "rgba(255,255,255,0.45)",
              },
            }}
          >
            <span className="ap-flex ap-items-center ap-justify-center ap-gap-2">
              {loading && (
                <CircularProgress size={18} sx={{ color: "#FFC62D" }} />
              )}
              {!loading && <span>Completar inscripción</span>}
            </span>
          </Button>
          {!isFormValid && (
            <span className="ap-text-xs ap-text-gray-400 ap-mt-2">
              Complete todos los campos obligatorios y acepte el envío por
              WhatsApp
            </span>
          )}
        </aside>
      )}

      {/* STICKY MOBILE SUMMARY */}
      {display.smAndDown && (
        <div className="ap-fixed ap-bottom-0 ap-left-0 ap-right-0 ap-bg-[#1A1A1A] ap-z-[100000] ap-border-t ap-border-[#3F3F3F] ap-p-4 ap-px-6">
          <div className="ap-flex ap-justify-between ap-items-center ap-mb-2">
            <span className="ap-text-white ap-text-sm">{course.titulo}</span>
            <strong className="ap-text-[#FFC62D]">
              {numberFormatGuaranies(course.precio)}
            </strong>
          </div>

          <label className="ap-flex ap-items-center ap-gap-2 ap-mb-2">
            <Checkbox
              checked={acceptWhatsapp}
              onChange={(e) => setAcceptWhatsapp(e.target.checked)}
              sx={{ color: "white" }}
            />

            <span className="ap-text-xs ap-text-white">
              Acepto recibir notificaciones por WhatsApp
            </span>
          </label>

          <Button
            fullWidth
            disabled={!isFormValid || loading}
            variant="contained"
            type="button"
            onClick={onSubmit}
            sx={{
              backgroundColor: isFormValid ? "#FFC62D" : "#3A3A3A",
              color: isFormValid ? "#000" : "rgba(255,255,255,0.45)",
              border: isFormValid ? "1px solid #FDD877" : "1px solid #4A4A4A",
              boxShadow: "none",
              textTransform: "none",
              fontFamily: "Poppins",
              fontSize: "14px",
              borderRadius: "10px",
              padding: "10px",
              cursor: isFormValid ? "pointer" : "not-allowed",
              transition: "all .2s ease",
              "&:hover": {
                backgroundColor: isFormValid ? "#FFD24A" : "#3A3A3A",
                boxShadow: "none",
              },
              "&.Mui-disabled": {
                backgroundColor: "#3A3A3A",
                color: "rgba(255,255,255,0.45)",
              },
            }}
          >
            <span className="ap-flex ap-items-center ap-justify-center ap-gap-2">
              {loading && (
                <CircularProgress size={18} sx={{ color: "#FFC62D" }} />
              )}
              {!loading && <span>Completar inscripción</span>}
            </span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
